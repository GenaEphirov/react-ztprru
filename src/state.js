import {rerenderEntireTree} from './index.js'

export const store = {
  state: {
    chatdata: [
      {userID: 1, messageID: 1, name: 'Andrey', message: 'Hello, Bill!', date: '26.07.2022'},
      {userID: 2, messageID: 2, name: 'Bill', message: 'How is it going?', date: '27.07.2022'},
    ],
    privatechatdata: [
      {userID: 2, messages: [
        {messageID: 1, sent: true, message: 'Hello, Bill! I wrote you in private chat for testing', date: '26.07.2022'},
        {messageID: 2, sent: false, message: 'Hello, Andrey! I successfully received your message', date: '26.07.2022'},
        {messageID: 3, sent: true, message: `That's good!`, date: '26.07.2022'},
        {messageID: 4, sent: false, message: 'Yeap! :)', date: '26.07.2022'},
      ]}
    ],
    text: {chatMessage: '', friendsMessages: {1: '', 2: 'hi!'}},
    friends: [
      {userID: 2, name: 'Bill'},
    ]
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
      this.addPost(action.textAreaElement)
    } else if (action.type === 'TRACK-TEXT-AREA') {
      this.trackTextArea(action.textAreaElement)
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