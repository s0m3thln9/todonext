import { FC } from 'react'
import { Button, Checkbox } from '@/shared/ui'
import { ListId, ListItemId } from '@/entities/list/model'

interface ListItemProps {
  name: string
  checked: boolean
  listId: ListId
  listItemId: ListItemId
}

export const ListItem: FC<ListItemProps> = ({
  name,
  checked,
  listId,
  listItemId,
}) => {
  return (
    <li className='flex items-center justify-between max-w-[300px]'>
      <Checkbox
        checked={checked}
        listId={listId}
        listItemId={listItemId}
      />
      <span className='ml-4'>{name}</span>
      <Button className='ml-4'>Delete</Button>
    </li>
  )
}
