import React from 'react'
import s from './Chat.module.css'
import Post from './Post'

const Chat = (props) => {
  let Posts = props.state.chatdata.map( (elem) => {
    return <Post name={elem.name} message={elem.message} date={elem.date} />
  })
  let textAreaElement = React.createRef()
  let params = {className: s.field}
  return (
    <div className={s.container}>
      <textarea className={s.field} ref={textAreaElement} onChange={() => props.dispatch(props.creators.trackTextAreaCreator(textAreaElement))} value={props.state.text.chatMessage} id="message" cols="30" rows="10" />
      <br/>
      <button class={s.btn} onClick={() => {
        props.dispatch(props.creators.addPostCreator(textAreaElement))
        textAreaElement.current.value = ''
        props.dispatch(props.creators.trackTextAreaCreator(textAreaElement))
        }}>Отправить сообщение</button>
      {Posts}
    </div>
  )
}

export default Chat