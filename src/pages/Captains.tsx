import { GlassCard } from '../components/captains/GlassCard'
import { MissionCard } from '../components/captains/MissionCard'
import { OnboardingVideo } from '../components/captains/OnboardingVideo'
import { ProgressChecklist } from '../components/captains/ProgressChecklist'
import { SectionHeading } from '../components/captains/SectionHeading'
import { StickyHelpButton } from '../components/captains/StickyHelpButton'
import { CaptainsForm } from '../components/captains/CaptainsForm'
import { content } from '../content/captains'

export default function CaptainsPage() {
  const feedbackMessage = encodeURIComponent(content.feedback.whatsappMessage)
  const hasWhatsapp = !content.contact.whatsapp.includes('YOUR_')
  const hasEmail = !content.contact.email.includes('YOUR_')
  const feedbackHref = hasWhatsapp
    ? `https://wa.me/${content.contact.whatsapp}?text=${feedbackMessage}`
    : hasEmail
      ? `mailto:${content.contact.email}?subject=WildLog%20Beta%20Feedback&body=${feedbackMessage}`
      : '#form'

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-navy-deep text-foreground">
      {/* Background Blobs */}
      <div className="glow-blob w-[320px] h-[320px] bg-gradient-to-br from-[#ff007f] to-[#7f00ff] top-[18%] -left-[160px]" />
      <div className="glow-blob w-[280px] h-[280px] bg-gradient-to-br from-[#00f2fe] to-[#4facfe] top-[48%] -right-[140px]" />
      <div className="glow-blob w-[350px] h-[350px] bg-gradient-to-br from-[#ffb347] to-[#ff7b00] top-[78%] -left-[175px]" />

      {/* Hero */}
      <section
        className="relative min-h-[82vh] overflow-hidden px-6 pt-[12vh] pb-24"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% -10%, rgba(41,155,255,.40), transparent 38%),
            linear-gradient(180deg, rgba(12,78,128,.18) 0%, rgba(3,24,52,.55) 45%, #000614 100%),
            url('/assets/hero.jpg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#000614]" />

        <div className="relative z-10 mx-auto flex w-full max-w-[620px] flex-col items-start">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 backdrop-blur-xl text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75">
            ⭐ Founding Captain
          </div>

          <h1 className="mb-8 text-[clamp(4rem,8vw,6rem)] font-extrabold leading-[0.92] tracking-[-0.06em] text-white">
            {content.hero.heading}
          </h1>

          <p className="mb-12 max-w-[34rem] text-[1.35rem] leading-[1.65] text-white/75">
            {content.hero.subheading}
          </p>

          <a
            href="#mission"
            className="flex h-[74px] w-full max-w-[520px] items-center justify-center rounded-full bg-gradient-to-b from-[#FFC44D] to-[#F6B22E] text-xl font-bold text-[#061426] shadow-[0_18px_40px_rgba(255,181,52,.28)] transition-all duration-300 hover:-translate-y-1 hover:brightness-105"
          >
            {content.hero.cta}
          </a>

          <p className="mt-4 w-full max-w-[520px] text-center text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
            {content.hero.ctaSupport}
          </p>
        </div>
      </section>

      {/* Quick Start */}
      <section className="mx-auto grid max-w-[980px] gap-6 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <ProgressChecklist
          items={content.progress.items}
          storageKey={content.progress.storageKey}
        />

        <OnboardingVideo
          heading={content.onboardingVideo.heading}
          description={content.onboardingVideo.description}
          src={content.onboardingVideo.src}
          poster={content.onboardingVideo.poster}
          captions={content.onboardingVideo.captions}
        />
      </section>

      {/* Mission */}
      <section id="mission" className="mx-auto max-w-[820px] scroll-mt-8 px-5 py-20">
        <SectionHeading>Your Mission</SectionHeading>

        <div className="space-y-10">
          {content.missions.map((mission: any) => (
            <MissionCard
              key={mission.number}
              step={{
                number: String(mission.number),
                title: mission.title,
                why: mission.why,
                description: mission.description,
                estTime: mission.estTime,
                screenshot: `/assets/Step ${mission.number}.png`,
                media: mission.media,
                screenshotAlt: mission.screenshotAlt,
                cta: mission.cta,
                ctaHref: mission.ctaHref,
              }}
            />
          ))}
        </div>
      </section>

      {/* Captain Tips */}
      <section className="mx-auto max-w-[620px] px-5 py-20">
        <GlassCard>
          <SectionHeading>
            {content.captainTips.heading}
          </SectionHeading>

          <ul className="space-y-4">
            {content.captainTips.items.map((item: string) => (
              <li key={item} className="flex gap-3">
                <span className="text-saffron font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </section>

      {/* Feedback */}
      <section id="feedback" className="mx-auto max-w-[620px] scroll-mt-8 px-5 py-20">
        <GlassCard>
          <SectionHeading>{content.feedback.heading}</SectionHeading>

          <p className="mb-8 text-moonstone/80">
            {content.feedback.description}
          </p>

          <a
            href={feedbackHref}
            target={hasWhatsapp ? '_blank' : undefined}
            rel={hasWhatsapp ? 'noopener noreferrer' : undefined}
            className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
          >
            {content.feedback.cta}
          </a>
        </GlassCard>
      </section>

      {/* Beta Expectations */}
      <section className="mx-auto max-w-[620px] px-5 py-20">
        <GlassCard>
          <SectionHeading>{content.betaExpectations.heading}</SectionHeading>

          <div className="space-y-4 text-lg leading-8 text-white/75">
            {content.betaExpectations.items.map((item: string) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </GlassCard>
      </section>

      {/* Final Mission */}
      <section className="mx-auto max-w-[620px] px-5 pt-20">
        <GlassCard>
          <SectionHeading>{content.finalMission.heading}</SectionHeading>

          <p className="mb-6 text-moonstone/80">
            {content.finalMission.description}
          </p>

          <ul className="space-y-4">
            {content.finalMission.items.map((item: string) => (
              <li key={item} className="flex gap-3">
                <span className="text-saffron font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </section>

      {/* Form */}
      <section
        id="form"
        className="mx-auto max-w-[620px] px-5 py-20"
      >
        <GlassCard>
          <SectionHeading>
            Complete Your Profile
          </SectionHeading>

          <p className="mb-8 text-moonstone/80">
            Let us know a bit about your crew and when you're ready to start.
          </p>

          <CaptainsForm />
        </GlassCard>
      </section>

      <StickyHelpButton
        whatsapp={content.contact.whatsapp}
        email={content.contact.email}
        message="Hey Sage, I need help with WildLog beta onboarding."
      />

      {/* Footer */}
      <footer className="border-t border-white/10 px-5 py-10 text-center text-sm text-white/40">
        © 2026 WildLog. Made for spearfishers.
      </footer>
    </div>
  )
}
