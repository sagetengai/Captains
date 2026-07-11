import { GlassCard } from '../components/captains/GlassCard'
import { SectionHeading } from '../components/captains/SectionHeading'
import { CaptainsForm } from '../components/captains/CaptainsForm'
import { content } from '../content/captains'

export default function CaptainsPage() {
  return (
    <div className="min-h-screen bg-navy-deep text-foreground relative overflow-x-hidden">
      {/* Ambient background glows for glassmorphism pop */}
      <div className="glow-blob w-[320px] h-[320px] bg-gradient-to-br from-[#ff007f] to-[#7f00ff] top-[18%] -left-[160px]" />
      <div className="glow-blob w-[280px] h-[280px] bg-gradient-to-br from-[#00f2fe] to-[#4facfe] top-[48%] -right-[140px]" />
      <div className="glow-blob w-[350px] h-[350px] bg-gradient-to-br from-[#ffb347] to-[#ff7b00] top-[78%] -left-[175px]" />
      <section 
        className="relative bg-cover bg-center pt-28 pb-16 px-5 flex flex-col justify-end overflow-hidden mb-8"
        style={{ 
          backgroundImage: 'url(/assets/hero.jpg)',
          minHeight: '480px',
        }}
      >
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 6, 20, 0.1) 0%, rgba(0, 6, 20, 0.4) 60%, var(--navy-deep) 100%)'
          }}
        />
        <div className="relative max-w-md mx-auto w-full z-10 flex flex-col items-start">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron/10 border border-saffron/20 text-saffron text-xs font-semibold mb-4 animate-fade-in">
            ⭐ Founding Captain
          </div>
          <h1 className="text-4xl font-bold font-sans mb-3 text-moonstone">{content.hero.heading}</h1>
          <p className="text-sm text-moonstone/90 leading-relaxed mb-6">{content.hero.subheading}</p>
          <a href="#form" className="self-start px-6 py-2.5 bg-saffron text-navy-deep rounded-full font-semibold hover:shadow-saffron-glow active:scale-[0.98] transition-all">{content.hero.cta}</a>
        </div>
      </section>

      <section className="px-5 py-12 max-w-md mx-auto">
        <GlassCard>
          <SectionHeading>{content.whatWeNeed.heading}</SectionHeading>
          <p className="text-moonstone/80 text-sm mb-6">{content.whatWeNeed.description}</p>
          <ul className="space-y-3">
            {content.whatWeNeed.items.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-saffron font-bold mt-0.5">✓</span>
                <span className="text-sm text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </section>

      <section className="px-5 py-12 max-w-md mx-auto">
        <SectionHeading>Your Mission</SectionHeading>
        <div className="space-y-6">
          {content.missions.map((mission: any, i: number) => (
            <div key={i} className="animate-fade-in">
              <div className="rounded-2xl glass-card p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-saffron text-ocean-deep flex items-center justify-center font-bold flex-shrink-0">{mission.number}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1">{mission.title}</h3>
                    <p className="text-sm text-moonstone/80 mb-3">{mission.description}</p>
                    <div className="mb-4 bg-ocean-mid/20 aspect-video rounded-lg border border-glass-border overflow-hidden">
                      <img src={`/assets/Step ${mission.number}.png`} alt={mission.screenshotAlt} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-moonstone/60 font-medium">⏱ {mission.estTime}</span>
                      <a href={mission.ctaHref} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-saffron text-ocean-deep text-sm font-semibold rounded-full hover:shadow-saffron-glow transition-all active:scale-[0.98]">{mission.cta}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 max-w-md mx-auto">
        <GlassCard>
          <SectionHeading>{content.beforeYouStart.heading}</SectionHeading>
          <div className="space-y-6">
            {Object.entries(content.beforeYouStart.sections).map(([key, section]: [string, any]) => (
              <div key={key}>
                <h3 className="text-moonstone text-xs font-semibold uppercase tracking-wide mb-3">{section.heading}</h3>
                <ul className="space-y-2">
                  {section.items.map((item: string, i: number) => (
                    <li key={i} className="text-sm text-foreground flex items-start gap-2">
                      <span className="text-saffron mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </GlassCard>
      </section>

      <section id="form" className="px-5 py-12 max-w-md mx-auto">
        <GlassCard>
          <SectionHeading>Complete Your Profile</SectionHeading>
          <p className="text-moonstone/80 text-sm mb-6">Let us know a bit about your crew and when you're ready to start.</p>
          <CaptainsForm />
        </GlassCard>
      </section>

      <section className="px-5 py-12 max-w-md mx-auto">
        <GlassCard>
          <SectionHeading>{content.feedback.heading}</SectionHeading>
          <p className="text-moonstone/80 text-sm mb-6">{content.feedback.description}</p>
          <div className="space-y-3">
            <a href={`https://wa.me/${content.contact.whatsapp}?text=${encodeURIComponent(content.feedback.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="block w-full px-4 py-3 bg-saffron text-ocean-deep text-center font-semibold rounded-full hover:shadow-saffron-glow active:scale-[0.98] transition-all">Send Feedback via WhatsApp</a>
            <a href={`mailto:${content.contact.email}?subject=WildLog Feedback`} className="block w-full px-4 py-3 bg-glass-tint text-foreground text-center font-semibold rounded-full border border-glass-border hover:bg-glass-tint/80 active:scale-[0.98] transition-all">Or Email Us</a>
          </div>
        </GlassCard>
      </section>

      <section className="px-5 py-12 max-w-md mx-auto">
        <GlassCard>
          <SectionHeading>{content.contact.heading}</SectionHeading>
          <p className="text-moonstone/80 text-sm mb-6">{content.contact.description}</p>
          <a href={`https://wa.me/${content.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="block w-full px-4 py-3 bg-saffron text-ocean-deep text-center font-semibold rounded-full hover:shadow-saffron-glow active:scale-[0.98] transition-all">Open WhatsApp</a>
        </GlassCard>
      </section>

      <footer className="px-5 py-8 text-center text-moonstone/50 text-xs border-t border-glass-border/30">
        <p>© 2026 WildLog. Made for spearfishers.</p>
      </footer>
    </div>
  )
}