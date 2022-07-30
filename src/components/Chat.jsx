import React from 'react'
import s from './Chat.module.css'
import Post from './Post'

const Chat = (props) => {
  let Posts = props['chatdata'].map( (elem) => {
    return <Post name={elem.name} message={elem.message} date={elem.date} />
  })
  return (
    <div className={s.container}>
      {Posts}
    </div>
  )
}

export default Chat