'use client'
import { MouseEvent, FC } from 'react'
import { useAppDispatch } from '@/app/stores'
import { listsSlice } from '@/entities/list'
import { ListId, ListItemId } from '@/entities/list/model'

interface CheckboxProps {
  checked: boolean
  listId: ListId
  listItemId: ListItemId
}

export const Checkbox: FC<CheckboxProps> = ({
  checked,
  listId,
  listItemId,
}) => {
  const dispatch = useAppDispatch()

  const handleClick = (e: MouseEvent) => {
    e.preventDefault()
    dispatch(
      listsSlice.actions.checkListItem({
        listId,
        listItemId,
        checked: !checked,
      }),
    )
    dispatch(listsSlice.actions.save())
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
          {checked && (
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
