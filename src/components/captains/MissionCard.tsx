import {
  UserPlus,
  ClipboardCheck,
  Camera,
  Trophy,
  Clock3,
  ArrowRight,
  Waves,
} from 'lucide-react'
import { useState } from 'react'

import { GlassCard } from './GlassCard'

interface MissionStep {
  number: string
  title: string
  why: string
  description: string
  estTime: string
  screenshot: string
  media?: string
  screenshotAlt: string
  cta?: string
  ctaHref?: string
}

interface MissionCardProps {
  step: MissionStep
}

const icons = [
  UserPlus,
  ClipboardCheck,
  Camera,
  Trophy,
  Waves,
]

export function MissionCard({ step }: MissionCardProps) {
  const index = Math.max(Number(step.number) - 1, 0)
  const Icon = icons[index] ?? ClipboardCheck
  const [mediaSrc, setMediaSrc] = useState(step.media ?? step.screenshot)

  return (
    <GlassCard className="animate-fade-in">

      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">

        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">

          <span className="text-3xl font-light tracking-widest text-white/75">
            {String(step.number).padStart(2, '0')}
          </span>

        </div>

        <div className="flex-1">

          <div className="mb-4 flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFB347]/15 text-[#FFB347]">

              <Icon size={22} />

            </div>

            <h3 className="text-3xl font-bold tracking-[-0.04em] text-white">
              {step.title}
            </h3>

          </div>

          <p className="mb-4 max-w-2xl text-lg font-semibold leading-8 text-white">
            {step.why}
          </p>

          <p className="mb-8 max-w-2xl text-lg leading-8 text-white/70">
            {step.description}
          </p>

          <div className="mb-8 overflow-hidden rounded-3xl border border-white/10">

            <img
              src={mediaSrc}
              alt={step.screenshotAlt}
              loading="lazy"
              onError={() => setMediaSrc(step.screenshot)}
              className="block w-full"
            />

          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">

              <Clock3
                size={18}
                className="text-[#FFB347]"
              />

              <span className="text-sm font-medium text-white/70">
                {step.estTime}
              </span>

            </div>

            {step.cta && step.ctaHref && (
              <a
                href={step.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-gradient-to-b
                  from-[#FFC44D]
                  to-[#F6B22E]
                  px-6
                  py-3
                  font-semibold
                  text-[#061426]
                  shadow-[0_12px_30px_rgba(255,179,71,.28)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_20px_40px_rgba(255,179,71,.4)]
                "
              >
                {step.cta}

                <ArrowRight size={18} />

              </a>
            )}

          </div>

        </div>

      </div>

    </GlassCard>
  )
}
