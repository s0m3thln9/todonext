'use client'

import { Button } from '@/shared/ui'
import { useRouter } from 'next/navigation'

export const StartMain = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/todolist')
  }

  return (
    <main className='flex justify-center items-center flex-grow border-t border-gray-500'>
      <Button onClick={handleClick}>Get started</Button>
    </main>
  )
}
