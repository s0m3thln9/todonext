import { Header } from '@/widgets/header'
import { TodoListMain } from '@/widgets/todolist-main'

export const TodoList = () => {
  return (
    <>
      <Header pageName='Todo Lists' />
      <TodoListMain />
    </>
  )
}
