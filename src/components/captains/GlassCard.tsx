interface GlassCardProps {
  children: React.ReactNode
  className?: string
}

export function GlassCard({
  children,
  className = '',
}: GlassCardProps) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-gradient-to-b
        from-[#17314A]/90
        via-[#11273E]/95
        to-[#0A1B2F]/95
        backdrop-blur-2xl
        shadow-[0_20px_60px_rgba(0,0,0,.35)]
        before:absolute
        before:inset-0
        before:bg-gradient-to-b
        before:from-white/[0.05]
        before:to-transparent
        before:pointer-events-none
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_30px_80px_rgba(0,0,0,.45)]
        ${className}
      `}
    >
      <div className="relative z-10 p-8">
        {children}
      </div>
    </div>
  )
}