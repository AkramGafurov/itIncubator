import React from 'react'
import s from './Message.module.css'


function Message() {
    return (
        <div className={s.message}>
            <img className={s.message__avatar}
                 src="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg"
                 alt="userAvatar"/>
            <div className={s.content}>
                <div className={s.content__box}>
                    <h2 className={s.content__userName}>Artem</h2>
                    <p className={s.content__userMessage}>npm start нажимал?</p>
                </div>
                <p className={s.content__time}>20:00</p>
            </div>
        </div>
    )
}

export default Message
