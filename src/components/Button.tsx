import type { MouseEventHandler } from "react"

type ButtonSize = 'sm' | 'default' | 'lg'
type ButtonType = {
  className?: string,
  size?: ButtonSize,
  children: React.ReactNode,
  clickEvent?: MouseEventHandler<HTMLButtonElement>,
}
export const Button = ({ className = '', size = 'default', children, clickEvent }: ButtonType) => {
  const baseClasses = 'relative flex-col overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-pirimary-foreground hover:bg-primary/90 shadow-lg shadow-primary cursor-pointer'

  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`

  return (
    <button onClick={clickEvent} className={classes}>
      <span className="relative flex items-center justify-center gap-2">{children}</span>
    </button>
  )
}