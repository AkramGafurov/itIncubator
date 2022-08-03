import React from 'react';
import s from './Profile.module.css'
const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.img} src="https://static-cse.canva.com/blob/787332/vk1941.fc04f702.avif" alt=""/>
            </div>

            <div>
                ava +description
            </div>

            <div>
                my posts
                <div>
                    new post
                </div>
            </div>

            <div>
                <div>post1</div>
                <div>post2</div>
            </div>
        </div>

    )
}

export  default Profile;