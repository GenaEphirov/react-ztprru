import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.post}>
      <div className={s.name_field}>{props.name} : {props.date}</div>
      <div className={s.message_field}>{props.message}</div>
    </div>
  )
}

export default Post