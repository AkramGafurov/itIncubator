import React from 'react'
import s from './Message.module.css'

export type messageDataType = {
    avatar: string,
    name:string,
    message: string,
    time: string,
}

function Message(props: messageDataType) {
    return (
        <div className={s.message}>
            <img className={s.message__avatar}
                 src={props.avatar}
                 alt="userAvatar"/>
            <div className={s.content}>
                <div className={s.content__box}>
                    <h2 className={s.content__userName}>{props.name}</h2>
                    <p className={s.content__userMessage}>{props.message}</p>
                </div>
                <p className={s.content__time}>{props.time}</p>
            </div>
        </div>
    )
}

export default Message
