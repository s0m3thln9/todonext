import { FC } from 'react'

interface ListProps {
  name: string
}

export const List: FC<ListProps> = ({ name }) => {
  return <li>{name}</li>
}
