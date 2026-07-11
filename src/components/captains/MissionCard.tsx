import { GlassCard } from './GlassCard'

interface MissionStep {
  number: string
  title: string
  description: string
  estTime: string
  screenshot: string
  screenshotAlt: string
}

interface MissionCardProps {
  step: MissionStep
}

export function MissionCard({ step }: MissionCardProps) {
  return (
    <GlassCard className="animate-fade-in p-5">
      <p className="text-saffron text-xs font-semibold tracking-wider mb-2">{step.number}</p>
      <h3 className="text-lg font-bold text-moonstone mb-1">{step.title}</h3>
      <p className="text-sm text-moonstone/70 mb-4">{step.description}</p>
      <div className="glass rounded-xl overflow-hidden mb-4">
        <img
          src={step.screenshot}
          alt={step.screenshotAlt}
          className="w-full h-auto block"
        />
      </div>
      <p className="text-xs text-moonstone/50 font-medium">⏱ {step.estTime}</p>
    </GlassCard>
  )
}
