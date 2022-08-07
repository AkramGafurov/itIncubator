import React from 'react';
import s from './Dialogs.module.css'
import {Link} from "react-router-dom";

type userInfoType = {
    name: string,
    id: number,
}

const Dialog = (props: userInfoType) => {
    return (
        <div className={s.dialog}>
            <Link to={`/dialogs/${props.id}`}>{props.name}</Link>
        </div>
    )
}

type messageType = {
    message: string,
}
const Message = (props: messageType) => {
    return (
        <div className={s.message}>{props.message}!</div>
    )
}

const Dialogs = () => {
    const DialogsData = [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Marina'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Kate'},
        {id: 5, name: 'John'}
    ];

    const MessagesData = [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'Hi!'},
        {id: 3, message: 'Hi everyone. How is you react?'},
        {id: 4, message: 'Fine'},
        {id: 5, message: 'go ahead'},
    ]

    // Формируем массивы jsx компонент из массивов данных, а зетем
    // вставляем их в разметку

    let dialogsElements = DialogsData.map(item => {
        return <Dialog name={item.name} id={item.id}/>
    })
    let messagesElements = MessagesData.map(item => {
        return <Message message={item.message}/>
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>

        </div>
    )
}

export default Dialogs