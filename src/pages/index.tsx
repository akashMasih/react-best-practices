import Input from "@/components/todo/Input"
import TodoList from "@/components/todo/TodoList"
import React, { Suspense, lazy, useState } from "react"



const initState = {
  title: "", time: new Date(), isDone: false
}
interface todoProp {
  isDone: boolean,
  title: string,
  time: string
}

export default function Home() {

  const [todoList, setTodoList] = useState<todoProp[]>([])
  const [todo, setTodo] = useState(initState)

  const onChangeInput = (val: string): void => {
    setTodo({ ...todo, title: val })
  }
  const submitTodo = (e: React.MouseEvent): void => {
    e.preventDefault()
    const data = [...todoList, todo]
    setTodoList(data)
    setTodo(initState)
  }

  const deleteTodo = (): void => {

  }
  const markDone = (index: number): void => {
    const data = [...todoList]
    data[index].isDone = true
    setTodoList(data)

  }

  const handleDelete = (index: number): void => {
    setTodoList(todoList.filter((item, ind) => ind !== index))

  }

  console.log(todoList)
  return (
    <div className="bg-gradient-to-r p-20 mx-auto w-full flex justify-center from-blue-900 to-pink-400 h-screen">
      <div className=" w-[500px] p-5 space-y-8 backdrop-blur-sm bg-blue-950/50 shadow-2xl rounded-2xl">
        <h1 className="text-center text-2xl font-bold text-white">Todo App</h1>
        <Input value={todo.title} onChange={onChangeInput} placeholder="Enter Todo Title" submit={submitTodo} />
        <TodoList todoList={todoList} markDone={markDone} handleDelete={handleDelete} />
      </div>
    </div>
  )
}
