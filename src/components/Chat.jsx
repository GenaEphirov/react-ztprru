import React from 'react'
import s from './Chat.module.css'
import Post from './Post'

const Chat = (props) => {
  let Posts = props['chatdata'].map( (elem) => {
    return <Post name={elem.name} message={elem.message} date={elem.date} />
  })
  let textAreaElement = React.createRef()
  return (
    <div className={s.container}>
      <textarea class={s.field} ref={textAreaElement} name="" id="message" cols="30" rows="10"></textarea>
      <br></br>
      <button class={s.btn} onClick={() => props.addPost(textAreaElement.current.value)}>Отправить сообщение</button>
      {Posts}
    </div>
  )
}

export default Chat