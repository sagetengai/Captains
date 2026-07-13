import { PlayCircle } from 'lucide-react'

import { GlassCard } from './GlassCard'

interface OnboardingVideoProps {
  heading: string
  description: string
  src: string
  poster: string
  captions: string
}

export function OnboardingVideo({
  heading,
  description,
  src,
  poster,
  captions,
}: OnboardingVideoProps) {
  return (
    <GlassCard className="hover:translate-y-0">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFB347]/15 text-[#FFB347]">
          <PlayCircle size={24} />
        </div>

        <div>
          <h2 className="text-2xl font-bold tracking-[-0.04em] text-white">
            {heading}
          </h2>
          <p className="mt-1 text-sm text-white/60">{description}</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/30">
        <video
          controls
          preload="metadata"
          poster={poster}
          className="aspect-video w-full object-cover"
        >
          <source src={src} type="video/mp4" />
          <track
            src={captions}
            kind="captions"
            srcLang="en"
            label="English"
            default
          />
        </video>
      </div>
    </GlassCard>
  )
}
