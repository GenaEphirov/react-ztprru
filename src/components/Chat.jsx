import React from 'react'
import s from './Chat.module.css'
import Post from './Post'
import {trackTextArea} from './../state.js'

const Chat = (props) => {
  let Posts = props.state.chatdata.map( (elem) => {
    return <Post name={elem.name} message={elem.message} date={elem.date} />
  })
  let textAreaElement = React.createRef()
  console.log(props.state.text.chatMessage)
  console.log(props.state.text.friendsMessages)
  return (
    <div className={s.container}>
      <textarea className={s.field} ref={textAreaElement} onChange={() => trackTextArea(textAreaElement)} value={props.state.text.chatMessage} id="message" cols="30" rows="10" />
      <br/>
      <button class={s.btn} onClick={() => {
        props.addPost(textAreaElement)
        textAreaElement.current.value = ''
        trackTextArea(textAreaElement)
        }}>Отправить сообщение</button>
      {Posts}
    </div>
  )
}

export default Chat