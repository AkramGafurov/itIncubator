import React from 'react';
import s from './MyPosts.module.css'
import Post, {PostType} from "./Post/Post";

type postsData = Array<PostType>
const MyPosts = () => {
    let postsData: postsData = [
        {
            post: 'Live For Nothing, Or Die For Something',
            likesCount: 5,
            avatarSRC: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Sylvester_Stallone.jpg/220px-Sylvester_Stallone.jpg",
            id: 1,
        },
        {
            post: 'I\'ll be back',
            likesCount: 4,
            avatarSRC: "https://www.theplace.ru/archive/00_icons/631_icon_128.jpg",
            id: 2,
        },
        {
            post: 'Yippie-Kai-Yay, Motherf*****r!',
            likesCount: 5,
            avatarSRC: "https://i0.wp.com/onlinelivedailynews.com/wp-content/uploads/2022/03/Bruce-Willis-Images-13.png?resize=426%2C541&ssl=1",
            id: 3,
        },
    ]

    // Формируем массивы jsx компонент из массивов данных, а зетем
    // вставляем их в разметку

    let postComponents = postsData.map(item => {
        return <Post post={item.post} likesCount={item.likesCount} avatarSRC={item.avatarSRC} id={item.id}/>
    })
    return (
        <div className={s.content}>
            my posts
            <div>
                <textarea name="" id=""></textarea>
                <button>Add post</button>
            </div>

            <div className={s.posts}>
                {postComponents}
            </div>

        </div>

    )
}

export default MyPosts;