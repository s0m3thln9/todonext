import { cn } from '@/shared/libs'
import { FC } from 'react'

interface HeaderProps {
  className?: string
  pageName: string
}

export const Header: FC<HeaderProps> = ({ className, pageName }) => {
  return (
    <header className={cn('flex justify-around py-8 px-4', className)}>
      <h1 className='text-4xl'>TODONEXT</h1>
      <p className='text-3xl'>{pageName}</p>
    </header>
  )
}
