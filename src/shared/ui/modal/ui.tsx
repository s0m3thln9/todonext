import { Button, Input } from '@/shared/ui'
import { ChangeEvent, FC, useEffect, useRef } from 'react'

interface ModalProps {
  onAdd?: () => void
  onClose?: () => void
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Modal: FC<ModalProps> = ({ onAdd, onClose, value, onChange }) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose?.()
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [onClose])

  return (
    <div className='w-full h-full bg-black bg-opacity-50 fixed top-0 left-0'>
      <div
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-500 rounded p-4'
        ref={ref}
      >
        <div className='flex justify-between items-center gap-5'>
          <p className='text-xl'>Enter the name of the list item</p>
          <Button onClick={onClose}>Close</Button>
        </div>
        <div className='flex justify-start items-center mt-5'>
          <Input
            placeholder='Enter the list item'
            value={value}
            onChange={onChange}
          />
          <Button onClick={onAdd}>Add</Button>
        </div>
      </div>
    </div>
  )
}
