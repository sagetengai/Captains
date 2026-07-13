import { HelpCircle, Mail, MessageCircle } from 'lucide-react'

interface StickyHelpButtonProps {
  whatsapp: string
  email: string
  message: string
}

export function StickyHelpButton({
  whatsapp,
  email,
  message,
}: StickyHelpButtonProps) {
  const encodedMessage = encodeURIComponent(message)
  const hasWhatsapp = whatsapp && !whatsapp.includes('YOUR_')
  const hasEmail = email && !email.includes('YOUR_')
  const fallbackHref = hasEmail
    ? `mailto:${email}?subject=WildLog%20Beta%20Help&body=${encodedMessage}`
    : '#feedback'

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      <div className="flex gap-2">
        {hasEmail && (
          <a
            href={`mailto:${email}?subject=WildLog%20Beta%20Help&body=${encodedMessage}`}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#11273E]/95 text-white shadow-[0_14px_40px_rgba(0,0,0,.35)] backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5"
            aria-label="Email WildLog support"
          >
            <Mail size={18} />
          </a>
        )}

        {hasWhatsapp && (
          <a
            href={`https://wa.me/${whatsapp}?text=${encodedMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#11273E]/95 text-white shadow-[0_14px_40px_rgba(0,0,0,.35)] backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5"
            aria-label="Message WildLog on WhatsApp"
          >
            <MessageCircle size={18} />
          </a>
        )}
      </div>

      <a
        href={hasWhatsapp ? `https://wa.me/${whatsapp}?text=${encodedMessage}` : fallbackHref}
        target={hasWhatsapp ? '_blank' : undefined}
        rel={hasWhatsapp ? 'noopener noreferrer' : undefined}
        className="inline-flex h-14 items-center gap-2 rounded-full bg-gradient-to-b from-[#FFC44D] to-[#F6B22E] px-5 font-bold text-[#061426] shadow-[0_18px_40px_rgba(255,181,52,.32)] transition-all duration-300 hover:-translate-y-1"
      >
        <HelpCircle size={20} />
        Need Help?
      </a>
    </div>
  )
}
