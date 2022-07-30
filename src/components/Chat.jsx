import React from 'react'
import s from './Chat.module.css'
import Post from './Post'

const Chat = () => {
  let chatData = [
    {userID: 1, messageID: 1, name: 'Andrey', message: 'Hello, Bill!', date: '26.07.2022'},
    {userID: 2, messageID: 2, name: 'Bill', message: 'How is it going?', date: '27.07.2022'},
  ]
  let Posts = chatData.map( (elem) => {
    return <Post name={elem.name} message={elem.message} date={elem.date} />
  })
  return (
    <div className={s.container}>
      {Posts}
    </div>
  )
}

export default Chat