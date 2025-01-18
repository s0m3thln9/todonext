import { FC, HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/shared/libs'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        'px-4 py-2 border border-gray-500 rounded hover:bg-gray-500',
        className,
      )}
    >
      {children}
    </button>
  )
}
