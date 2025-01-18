import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

type ListId = string
type ListItemId = string

type List = {
  name: string
  id: ListId
  items: ListItem[]
}

type ListItem = {
  name: string
  id: ListItemId
  checked: boolean
}

type Lists = {
  ids: ListId[]
  entities: Record<ListId, List>
  selectedListId?: ListId
}

const initialState: Lists = {
  ids: [],
  entities: {},
  selectedListId: undefined,
}

export const listsSlice = createSlice({
  name: 'listsSlice',
  initialState,
  selectors: {
    selectLists: (state) => state.ids.map((id) => state.entities[id]),
  },
  reducers: {
    addList: (state, action: PayloadAction<{ name: string }>) => {
      const { name } = action.payload
      const id = uuidv4()
      state.ids.push(id)
      state.entities[id] = {
        name,
        id,
        items: [],
      }
    },
  },
})
