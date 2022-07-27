import React from 'react'
import s from './Content.module.css'
import Post from './Post'

const Chat = () => {
  return (
    <div className={s.container}>
      <Post name='Andrey' message='Hello, Bill!' date='26.07.2022'/>
      <Post name='Bill' message='How is it going?' date='27.07.2022'/>
    </div>
  )
}

export default Chat