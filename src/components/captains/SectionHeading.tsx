interface SectionHeadingProps {
  number?: string
  children: React.ReactNode
  className?: string
}

export function SectionHeading({ number, children, className = '' }: SectionHeadingProps) {
  return (
    <div className={`mb-5 ${className}`}>
      {number && (
        <p className="text-saffron text-sm font-semibold tracking-wider mb-1">{number}</p>
      )}
      <h2 className="text-2xl font-bold text-moonstone">{children}</h2>
    </div>
  )
}
