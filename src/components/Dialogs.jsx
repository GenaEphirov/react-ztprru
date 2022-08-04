import React from 'react'
import s from './Dialogs.module.css'
import Post from './Post'

const Dialogs = (props) => {
  let currentChatID = 2;
  let usernameSelf = 'You'
  let currentFriendsName, currentChatMessages;
  for (let friend of props.state.friends) {
    if (friend.userID === currentChatID) {
      currentFriendsName = friend.name;
    }
  }
  for (let privateChat of props.state.privatechatdata) {
    if (privateChat.userID === currentChatID) {
      currentChatMessages = privateChat.messages
    }
  }
  let Messages = currentChatMessages.map( (elem) => {
    let currentName;
    if (elem.sent) {
      currentName = usernameSelf;
    } else {
      currentName = currentFriendsName;
    }
    return <Post name={currentName} message={elem.message} date={elem.date} sent={elem.sent}/>
  })
  let activeItem = `${s.navbar_item} active`
  return (
    <div className={s.container}>
      <div className={s.navbar}>
        <div className={s.navbar_item}>Me</div>
        <div className={s.navbar_item}>John</div>
        <div className={s.active_navbar_item}>Bill</div>
        <div className={s.navbar_item}>Mary</div>
      </div>
      <div className={s.chat}>
        {Messages}
      </div>
    </div>
  )
}

export default Dialogs