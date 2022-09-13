import React from "react";
import "./style.css";
import Header from './components/Header'
import Chat from './components/Chat'
import Dialogs from './components/Dialogs'
import ExperimentalComponent from './components/ExperimentalComponent'


export default function App(props) {
  return (
    <div>
      <Header />
      <Dialogs state={{
        privatechatdata: props.state.privatechatdata,
        text: {chatMessages: props.state.text.friendsMessages},
        friends: props.state.friends,
      }} />
      <Chat state={{
          chatdata: props.state.chatdata, 
          text: {chatMessage: props.state.text.chatMessage},
        }} dispatch={props.dispatch} creators={props.creators} />
      <ExperimentalComponent name={'Andrey'}></ExperimentalComponent>
      {/* TODO FOOTER */}
    </div>
  );
}
