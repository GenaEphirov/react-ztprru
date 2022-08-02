export const state = {
  chatdata: [
    {userID: 1, messageID: 1, name: 'Andrey', message: 'Hello, Bill!', date: '26.07.2022'},
    {userID: 2, messageID: 2, name: 'Bill', message: 'How is it going?', date: '27.07.2022'},
  ],
}
export const addPost = (message) => {
  let userID = 1
  let messageID = state.chatdata.slice(-1)[0].messageID + 1
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
  state.chatdata.push({
    userID: userID,
    messageID: messageID,
    name: name,
    message: message,
    date: date,
  })
}
