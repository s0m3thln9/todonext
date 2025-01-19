import { FC } from 'react'

interface ListProps {
  name: string
  onClick: () => void
}

export const List: FC<ListProps> = ({ name, onClick }) => {
  return (
    <li
      onClick={() => onClick()}
      className='cursor-pointer hover:underline'
    >
      {name}
    </li>
  )
}
