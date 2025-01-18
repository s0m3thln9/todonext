import { FC } from 'react'
import { Button, Checkbox } from '@/shared/ui'

interface ListItemProps {
  name: string
}

export const ListItem: FC<ListItemProps> = ({ name }) => {
  return (
    <li className='flex items-center justify-between max-w-[300px]'>
      <Checkbox />
      <span className='ml-4'>{name}</span>
      <Button className='ml-4'>Delete</Button>
    </li>
  )
}
