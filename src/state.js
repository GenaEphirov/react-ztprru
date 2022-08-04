import {rerenderEntireTree} from './index.js'

export const store = {
  state: {
    chatdata: [
      {userID: 1, messageID: 1, name: 'Andrey', message: 'Hello, Bill!', date: '26.07.2022'},
      {userID: 2, messageID: 2, name: 'Bill', message: 'How is it going?', date: '27.07.2022'},
    ],
    text: {chatMessage: '', friendsMessages: {1: '', 2: 'hi!'}}
  },
  addPost(elem) {
    if (elem.current.value === '') return;
    let userID = 1
    let messageID = this.state.chatdata.slice(-1)[0].messageID + 1
    let name = 'Andrey'
    let getCurrentTime = () => {
      let now = new Date()
      let date = now.getDate()
      let month = now.getMonth()
      let year = now.getFullYear()
      if (date < 10) {date = `0${date}`}
      if (month+1 < 10) {month = `0${month+1}`}
      if (year < 10) {year = `0${year}`}
      return `${date}.${month}.${year}`
    }
  
    let date = getCurrentTime()
    this.state.chatdata.push({
      userID: userID,
      messageID: messageID,
      name: name,
      message: elem.current.value,
      date: date,
    })
    rerenderEntireTree()
  },
  trackTextArea(elem) {
    this.state.text.chatMessage = elem.current.value
    rerenderEntireTree()
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      store.addPost(action.textAreaElement)
    } else if (action.type === 'TRACK-TEXT-AREA') {
      store.trackTextArea(action.textAreaElement)
    }
  },
  creators: {
    addPostCreator(textAreaElement) {
      return {
        type: 'ADD-POST',
        textAreaElement: textAreaElement,
      }
    },
    trackTextAreaCreator(textAreaElement) {
      return {
        type: 'TRACK-TEXT-AREA',
        textAreaElement: textAreaElement,
      }
    },
  },
}