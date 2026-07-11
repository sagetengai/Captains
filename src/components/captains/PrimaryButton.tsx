interface PrimaryButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit'
  target?: string
  rel?: string
  className?: string
}

export function PrimaryButton({
  children,
  href,
  onClick,
  disabled = false,
  type = 'button',
  target,
  rel,
  className = '',
}: PrimaryButtonProps) {
  const baseClass = `inline-flex items-center justify-center px-8 py-3.5 bg-saffron text-navy-deep font-semibold rounded-full transition-all duration-250 active:scale-[0.98] hover:shadow-saffron-glow disabled:opacity-50 ${className}`

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={baseClass}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseClass}>
      {children}
    </button>
  )
}
