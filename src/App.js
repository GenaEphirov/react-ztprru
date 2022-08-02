import React from "react";
import "./style.css";
import Header from './components/Header'
import Chat from './components/Chat'

export default function App(props) {
  return (
    <div>
      <Header />
      <Chat chatdata={props.chatdata} addPost={props.addPost}/>
    </div>
  );
}
