import React from "react";
import {FC} from 'react'
import {FilterValuesType} from './App'

type TodoListPropsType = {
    title: string,
    tasks: Array<TaskType>,
    deleteTask: (id:number) => void,
    changeFilter: (filter:FilterValuesType) => void
}

export type  TaskType = {
    id: number,
    title: string,
    isDone: boolean,
}

const ToDoLIst/*: FC<TodoListPropsType> можно типизировать и так*/ = (props: TodoListPropsType) => {
    const tasksList = props.tasks.map(item => {
        return <li><input type="checkbox" checked={item.isDone}/><span>{item.title}</span>
        <button onClick = {()=>{props.deleteTask(item.id)}}>x</button></li>
    })
    
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasksList}
            </ul>
            <div>
                <button onClick ={()=>props.changeFilter('all')}>All</button>
                <button onClick ={()=>props.changeFilter('active')}>Active</button>
                <button onClick ={()=>props.changeFilter('completed')}>Completed</button>
            </div>
        </div>
    );
}

export default ToDoLIst;
