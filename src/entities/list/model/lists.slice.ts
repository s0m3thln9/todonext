import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export type ListId = string
export type ListItemId = string

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
    selectSelectedList: (state) => state.entities[state.selectedListId ?? ''],
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
    selectList: (state, action: PayloadAction<{ selectedListId: ListId }>) => {
      const { selectedListId } = action.payload
      state.selectedListId = selectedListId
    },
    addListItem: (
      state,
      action: PayloadAction<{ listId: ListId; name: string }>,
    ) => {
      const { listId, name } = action.payload
      const id = uuidv4()
      state.entities[listId].items.push({
        name,
        id,
        checked: false,
      })
    },
    checkListItem: (
      state,
      action: PayloadAction<{
        listId: ListId
        listItemId: ListItemId
        checked: boolean
      }>,
    ) => {
      const { listId, listItemId, checked } = action.payload
      const list = state.entities[listId]
      if (!list) return
      const item = list.items.find((item) => item.id === listItemId)
      if (!item) return
      item.checked = checked
    },
    deleteListItem: (
      state,
      action: PayloadAction<{ listId: ListId; listItemId: ListItemId }>,
    ) => {
      const { listId, listItemId } = action.payload
      const list = state.entities[listId]
      if (!list) return
      list.items = list.items.filter((item) => item.id !== listItemId)
    },
    save: (state) => {
      localStorage.setItem('lists', JSON.stringify(state))
    },
    load: (state) => {
      const data = localStorage.getItem('lists')
      if (!data) return
      const lists = JSON.parse(data)
      state.ids = lists.ids
      state.entities = lists.entities
      state.selectedListId = undefined
    },
  },
})
