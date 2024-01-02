import React from 'react'
import TodoCard from './TodoCard'

interface todoProp {
    isDone: boolean,
    title: string,
    time: string
}


interface props {
    todoList: todoProp[]
    handleDelete: (key: number) => {},
    markDone: (key: number) => {},
}


function TodoList({ todoList, markDone, handleDelete }: props) {
    return (
        <div className='my-4 space-y-4'>
            {
                todoList.map((item: object, index: number) => (
                    <TodoCard index={index} handleDelete={handleDelete} markDone={markDone} key={index} {...item} />
                ))
            }
        </div>
    )
}

export default TodoList