import React from "react";
import {FC, MouseEvent} from 'react'
import {FilterValuesType} from './App'
import {Button} from './components/Button'
import {Input} from './components/Input'



type TodoListPropsType = {
    title: string,
    tasks: Array<TaskType>,
    deleteTask: (id:string) => void,
    changeFilter: (filter:FilterValuesType) => void,
    addTask: () => void,
    userInput: string,
    setUserInput: (UserInput:string) => void


}

export type  TaskType = {
    id: string,
    title: string,
    isDone: boolean,
}

const ToDoLIst/*: FC<TodoListPropsType> можно типизировать и так*/ = (props: TodoListPropsType) => {

    const deleteHandler = (id: string)=>{
        props.deleteTask(id)
    }


    const tasksList = props.tasks.map(item => {
        return (
        <li><input type="checkbox" checked={item.isDone}/><span>{item.title}</span>
        <Button name = 'x' callBack={()=>{deleteHandler(item.id)}}/>
        {/* <button onClick = {()=>{deleteHandler(item.id)}}>x</button> */}
        </li>
    )
    }
    )
    
//-------функция обработки нажатия кнопок фильтрации-------
    const onClickFilterHandler = (filter: FilterValuesType) =>{
            {props.changeFilter(filter)}  
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <Input userInput={props.userInput} setUserInput = {props.setUserInput} addTask={props.addTask}/>
                <Button name = {'+'} callBack = {props.addTask}/>
            </div>
            <ul>
                {tasksList}
            </ul>
            <div>

                <Button name={'All'} callBack ={()=>onClickFilterHandler('all')} />
                <Button name={'Active'} callBack ={()=>onClickFilterHandler('active')} />
                 <Button name={'Completed'} callBack ={()=>onClickFilterHandler('completed')} />
               
            </div>
        </div>
    );
}

export default ToDoLIst;
