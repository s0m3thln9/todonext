'use client'

import { Button, Input, Modal } from '@/shared/ui'
import { List, listsSlice } from '@/entities/list'
import { ListItem } from '@/entities/list'
import { useAppDispatch, useAppSelector } from '@/app/stores'
import { ChangeEvent, useEffect, useState } from 'react'
import { ListId } from '@/entities/list/model'
import { createPortal } from 'react-dom'

export const TodoListMain = () => {
  const dispatch = useAppDispatch()
  const lists = useAppSelector(listsSlice.selectors.selectLists)
  const selectedList = useAppSelector(listsSlice.selectors.selectSelectedList)
  const [listName, setListName] = useState('')
  const [listItemName, setListItemName] = useState('')
  const [modal, setModal] = useState(false)

  useEffect(() => {
    dispatch(listsSlice.actions.load())
  }, [dispatch])

  const onChangeListName = (e: ChangeEvent<HTMLInputElement>) => {
    setListName(e.target.value)
  }

  const onChangeListItemName = (e: ChangeEvent<HTMLInputElement>) => {
    setListItemName(e.target.value)
  }

  const addList = () => {
    dispatch(listsSlice.actions.addList({ name: listName }))
    dispatch(listsSlice.actions.save())
  }

  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  const addListItem = () => {
    dispatch(
      listsSlice.actions.addListItem({
        listId: selectedList?.id,
        name: listItemName,
      }),
    )
    dispatch(listsSlice.actions.save())
  }

  const selectList = (id: ListId) => {
    dispatch(listsSlice.actions.selectList({ selectedListId: id }))
  }

  return (
    <main className='flex justify-center'>
      <div className='w-1/2 flex flex-col items-start pl-4'>
        <div>
          <Input
            placeholder='Enter the list name'
            value={listName}
            onChange={onChangeListName}
          />
          <Button onClick={addList}>Create new list</Button>
        </div>
        <ul className='text-2xl mt-2'>
          {lists.map((list) => (
            <List
              name={list.name}
              key={list.id}
              onClick={() => selectList(list.id)}
            />
          ))}
        </ul>
      </div>
      <div className='w-1/2'>
        <h2 className='text-2xl'>{selectedList?.name || 'Select list'}</h2>
        {selectedList && (
          <div className='mt-2'>
            <Button onClick={openModal}>Add item</Button>
            {modal &&
              createPortal(
                <Modal
                  onAdd={addListItem}
                  onClose={closeModal}
                  value={listItemName}
                  onChange={onChangeListItemName}
                />,
                document.body,
              )}
            <ul className='flex flex-col mt-2 gap-2'>
              {selectedList.items.map((item) => (
                <ListItem
                  name={item.name}
                  key={item.id}
                  checked={item.checked}
                  listId={selectedList?.id}
                  listItemId={item.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  )
}
