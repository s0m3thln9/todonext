'use client'
import { useState, MouseEvent } from 'react'

export const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(true)
  const handleClick = (e: MouseEvent) => {
    e.preventDefault()
    setIsChecked((prev) => !prev)
  }
  return (
    <div
      className='flex items-center'
      onClick={handleClick}
    >
      <input
        type='checkbox'
        id='custom-checkbox'
        className='hidden'
      />
      <label
        htmlFor='custom-checkbox'
        className='flex items-center cursor-pointer'
      >
        <span className='w-6 h-6 inline-block bg-white border border-gray-300 rounded-md flex-shrink-0 transition duration-200 ease-in-out'>
          {isChecked && (
            <svg
              className='w-6 h-6 text-blue-600'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='4'
                d='M5 13l4 4L19 7'
              ></path>
            </svg>
          )}
        </span>
      </label>
    </div>
  )
}
