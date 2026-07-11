import { GlassCard } from '../components/captains/GlassCard'
import { SectionHeading } from '../components/captains/SectionHeading'
import { CaptainsForm } from '../components/captains/CaptainsForm'
import { content } from '../content/captains'

export default function CaptainsPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-navy-deep text-foreground">
      <div className="glow-blob w-[320px] h-[320px] bg-gradient-to-br from-[#ff007f] to-[#7f00ff] top-[18%] -left-[160px]" />
      <div className="glow-blob w-[280px] h-[280px] bg-gradient-to-br from-[#00f2fe] to-[#4facfe] top-[48%] -right-[140px]" />
      <div className="glow-blob w-[350px] h-[350px] bg-gradient-to-br from-[#ffb347] to-[#ff7b00] top-[78%] -left-[175px]" />

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
            href="#form"
            className="flex h-[74px] w-full max-w-[520px] items-center justify-center rounded-full bg-gradient-to-b from-[#FFC44D] to-[#F6B22E] text-xl font-bold text-[#061426] shadow-[0_18px_40px_rgba(255,181,52,.28)] transition-all duration-300 hover:-translate-y-1 hover:brightness-105"
          >
            {content.hero.cta}
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-[620px] px-5 py-20">
        <GlassCard>
          <SectionHeading>{content.whatWeNeed.heading}</SectionHeading>
          <p className="mb-8 text-moonstone/80">{content.whatWeNeed.description}</p>
          <ul className="space-y-4">
            {content.whatWeNeed.items.map((item: string, i: number) => (
              <li key={i} className="flex gap-3">
                <span className="text-saffron font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </section>

      <section className="mx-auto max-w-[620px] px-5 py-20">
        <SectionHeading>Your Mission</SectionHeading>
        <div className="space-y-8">
          {content.missions.map((mission: any) => (
            <div key={mission.number} className="glass-card rounded-[28px] p-8">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-saffron font-bold text-ocean-deep">{mission.number}</div>
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold">{mission.title}</h3>
                  <p className="mb-5 text-moonstone/75">{mission.description}</p>
                  <img src={`/assets/Step ${mission.number}.png`} alt={mission.screenshotAlt} className="mb-5 aspect-video w-full rounded-xl object-cover" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-moonstone/60">⏱ {mission.estTime}</span>
                    <a href={mission.ctaHref} target="_blank" rel="noreferrer" className="rounded-full bg-saffron px-5 py-2 font-semibold text-ocean-deep">{mission.cta}</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[620px] px-5 py-20"><GlassCard><SectionHeading>{content.beforeYouStart.heading}</SectionHeading><div className="space-y-6">{Object.entries(content.beforeYouStart.sections).map(([k, s]: any) => <div key={k}><h3 className="mb-3 text-xs uppercase tracking-[0.18em] text-white/70">{s.heading}</h3><ul className="space-y-2">{s.items.map((it: string, i: number) => <li key={i}>• {it}</li>)}</ul></div>)}</div></GlassCard></section>

      <section id="form" className="mx-auto max-w-[620px] px-5 py-20">
        <GlassCard>
          <SectionHeading>Complete Your Profile</SectionHeading>
          <p className="mb-8 text-moonstone/80">Let us know a bit about your crew and when you're ready to start.</p>
          <CaptainsForm />
        </GlassCard>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 text-center text-sm text-white/40">
        © 2026 WildLog. Made for spearfishers.
      </footer>
    </div>
  )
}
