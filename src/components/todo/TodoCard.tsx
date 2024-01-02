import React from 'react'
import moment from 'moment'
import { MdDelete } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";

interface props {
    title: string,
    isDone: boolean,
    time: string,
    handleDelete: (key: number) => {},
    markDone: (key: number) => {},
    index: number
}

const TodoCard: React.FC<props> = ({ title, index, isDone, time, handleDelete, markDone }) => {

    let formatTime = new Date(time)
    return (
        <div className={`p-4 flex justify-between items-center text-white ${isDone ? 'bg-gray-700' : 'bg-blue-900'} shadow-2xl rounded-xl`}>
            <div>
                <h3 >{title}</h3>
                <p className='text-xs text-gray-300'>{moment(formatTime).format('LT')}</p>
            </div>
            <div>
                <button className='btn bg-blue-500 rounded-lg px-2 py-2 mr-2' onClick={() => handleDelete(index)}><MdDelete /></button>
                {!isDone && <button className='btn bg-blue-500 rounded-lg px-2 py-2' onClick={() => markDone(index)}><MdOutlineDone /></button>}
            </div>
        </div>
    )
}

export default TodoCard