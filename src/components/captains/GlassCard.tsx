interface GlassCardProps {
    children: React.ReactNode
    className?: string
  }
  
  export function GlassCard({ children, className = '' }: GlassCardProps) {
    return (
      <div className={`rounded-2xl glass-card p-6 ${className}`}>
        {children}
      </div>
    )
  }