import { FC, HTMLAttributes } from 'react'
import { cn } from '@/shared/libs'

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  className?: string
  placeholder?: string
  value?: string
}

export const Input: FC<InputProps> = ({
  className,
  placeholder,
  value,
  ...props
}) => {
  return (
    <input
      {...props}
      value={value}
      placeholder={placeholder}
      className={cn(
        'px-4 py-2 border border-gray-500 rounded text-black',
        className,
      )}
    />
  )
}
