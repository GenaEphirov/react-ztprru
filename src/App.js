import React from "react";
import "./style.css";
import Header from './components/Header'
import Chat from './components/Chat'

export default function App(props) {
  return (
    <div>
      <Header />
      <Chat state={{
          chatdata: props.state.chatdata, 
          text: {chatMessage: props.state.text.chatMessage}}
        } dispatch={props.dispatch} />
    </div>
  );
}
