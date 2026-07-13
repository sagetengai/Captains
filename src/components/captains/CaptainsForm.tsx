import React, { useState } from 'react'
import { supabase } from '../../lib/supabase'
import {
  User,
  Mail,
  Phone,
  Users,
  Calendar,
  Link,
  MessageSquare,
  Loader2,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react'

export function CaptainsForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    expected_crew_size: 4,
    start_date: '',
    existing_group_id: '',
    notes: '',
  })

  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  // Validation regex for UUID
  const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'expected_crew_size' ? parseInt(value) || 0 : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg(null)

    // Client-side validations
    if (formData.existing_group_id.trim() && !uuidRegex.test(formData.existing_group_id.trim())) {
      setErrorMsg('Please enter a valid Group ID format (UUID), or leave it empty.')
      setLoading(false)
      return
    }

    if (!supabase) {
      setErrorMsg('Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to enable profile submissions.')
      setLoading(false)
      return
    }

    try {
      const payload: any = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        whatsapp: formData.whatsapp.trim(),
        expected_crew_size: formData.expected_crew_size,
        start_date: formData.start_date,
      }

      if (formData.existing_group_id.trim()) {
        payload.existing_group_id = formData.existing_group_id.trim()
      }

      if (formData.notes.trim()) {
        payload.notes = formData.notes.trim()
      }

      const { error } = await supabase.from('captains_intake').insert([payload])

      if (error) {
        throw error
      }

      setSuccess(true)
    } catch (err: any) {
      console.error('Error submitting profile:', err)
      setErrorMsg(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    const whatsappMessage = encodeURIComponent(
      `Hey Sage, I just completed my Founding Captain profile! Excited to get started with my crew.`
    )
    
    return (
      <div className="text-center py-8 px-4 animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-saffron/10 rounded-full flex items-center justify-center text-saffron border border-saffron/30">
            <CheckCircle2 size={36} className="animate-pulse" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-moonstone mb-3">Welcome Aboard!</h3>
        <p className="text-sm text-moonstone/80 leading-relaxed mb-8">
          Your profile has been saved. We'll reach out to coordinate your crew onboarding and set up your season.
        </p>
        <div className="space-y-4">
          <a
            href={`https://wa.me/YOUR_WHATSAPP_NUMBER_HERE?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-6 py-3.5 bg-saffron text-navy-deep font-semibold rounded-full hover:shadow-saffron-glow transition-all duration-200 active:scale-[0.98]"
          >
            Ping Sage on WhatsApp
          </a>
          <button
            onClick={() => {
              setFormData({
                name: '',
                email: '',
                whatsapp: '',
                expected_crew_size: 4,
                start_date: '',
                existing_group_id: '',
                notes: '',
              })
              setSuccess(false)
            }}
            className="text-xs text-moonstone/40 hover:text-moonstone/70 transition-colors"
          >
            Submit Another Profile
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {errorMsg && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/35 text-red-400 text-sm">
          <AlertTriangle size={18} className="flex-shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Captain's Name */}
      <div className="relative">
        <label htmlFor="name" className="block text-xs font-semibold text-moonstone/70 uppercase tracking-wider mb-2">
          Captain's Name
        </label>
        <div className="relative">
          <User size={18} className="absolute left-4 top-3.5 text-moonstone/40" />
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Captain Jack"
            className="w-full pl-12 pr-4 py-3 bg-navy-deep/30 border border-glass-border rounded-xl text-foreground text-sm focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-all duration-200 placeholder:text-moonstone/20"
          />
        </div>
      </div>

      {/* Email Address */}
      <div className="relative">
        <label htmlFor="email" className="block text-xs font-semibold text-moonstone/70 uppercase tracking-wider mb-2">
          Email Address
        </label>
        <div className="relative">
          <Mail size={18} className="absolute left-4 top-3.5 text-moonstone/40" />
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="jack@blackpearl.com"
            className="w-full pl-12 pr-4 py-3 bg-navy-deep/30 border border-glass-border rounded-xl text-foreground text-sm focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-all duration-200 placeholder:text-moonstone/20"
          />
        </div>
      </div>

      {/* WhatsApp Number */}
      <div className="relative">
        <label htmlFor="whatsapp" className="block text-xs font-semibold text-moonstone/70 uppercase tracking-wider mb-2">
          WhatsApp Number
        </label>
        <div className="relative">
          <Phone size={18} className="absolute left-4 top-3.5 text-moonstone/40" />
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            required
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="e.g. +1 (555) 019-2834"
            className="w-full pl-12 pr-4 py-3 bg-navy-deep/30 border border-glass-border rounded-xl text-foreground text-sm focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-all duration-200 placeholder:text-moonstone/20"
          />
        </div>
      </div>

      {/* Grid: Expected Crew Size & Target Start Date */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="expected_crew_size" className="block text-xs font-semibold text-moonstone/70 uppercase tracking-wider mb-2">
            Crew Size
          </label>
          <div className="relative">
            <Users size={18} className="absolute left-4 top-3.5 text-moonstone/40" />
            <input
              type="number"
              id="expected_crew_size"
              name="expected_crew_size"
              required
              min="1"
              max="50"
              value={formData.expected_crew_size}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 bg-navy-deep/30 border border-glass-border rounded-xl text-foreground text-sm focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-all duration-200"
            />
          </div>
        </div>

        <div>
          <label htmlFor="start_date" className="block text-xs font-semibold text-moonstone/70 uppercase tracking-wider mb-2">
            Start Date
          </label>
          <div className="relative">
            <Calendar size={18} className="absolute left-4 top-3.5 text-moonstone/40" />
            <input
              type="date"
              id="start_date"
              name="start_date"
              required
              value={formData.start_date}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 bg-navy-deep/30 border border-glass-border rounded-xl text-foreground text-sm focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-all duration-200 [color-scheme:dark]"
            />
          </div>
        </div>
      </div>

      {/* Existing Group ID (Optional) */}
      <div className="relative">
        <label htmlFor="existing_group_id" className="block text-xs font-semibold text-moonstone/70 uppercase tracking-wider mb-2">
          Existing Group ID <span className="text-[10px] text-moonstone/40 lowercase italic">(optional)</span>
        </label>
        <div className="relative">
          <Link size={18} className="absolute left-4 top-3.5 text-moonstone/40" />
          <input
            type="text"
            id="existing_group_id"
            name="existing_group_id"
            value={formData.existing_group_id}
            onChange={handleChange}
            placeholder="e.g. 123e4567-e89b-12d3-a456-426614174000"
            className="w-full pl-12 pr-4 py-3 bg-navy-deep/30 border border-glass-border rounded-xl text-foreground text-sm focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-all duration-200 placeholder:text-moonstone/20"
          />
        </div>
      </div>

      {/* Special Notes (Optional) */}
      <div className="relative">
        <label htmlFor="notes" className="block text-xs font-semibold text-moonstone/70 uppercase tracking-wider mb-2">
          Notes or Special Requests <span className="text-[10px] text-moonstone/40 lowercase italic">(optional)</span>
        </label>
        <div className="relative">
          <MessageSquare size={18} className="absolute left-4 top-3.5 text-moonstone/40" />
          <textarea
            id="notes"
            name="notes"
            rows={3}
            value={formData.notes}
            onChange={handleChange}
            placeholder="Tell us about your crew or target species..."
            className="w-full pl-12 pr-4 py-3 bg-navy-deep/30 border border-glass-border rounded-xl text-foreground text-sm focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-all duration-200 placeholder:text-moonstone/20 resize-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full mt-4 inline-flex items-center justify-center px-8 py-3.5 bg-saffron text-navy-deep font-semibold rounded-full transition-all duration-250 active:scale-[0.98] hover:shadow-saffron-glow disabled:opacity-50 cursor-pointer"
      >
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin mr-2" />
            Submitting...
          </>
        ) : (
          'Submit Roster Profile'
        )}
      </button>
    </form>
  )
}
