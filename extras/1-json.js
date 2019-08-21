const fs = require('fs')
// const book = {
//   title: 'name',
//   author: 'alex'
// }

// const bookJSON = JSON.stringify(book)

// console.log(bookJSON)

// fs.writeFileSync('1-json.json', bookJSON)

// console.log(JSON.parse(bookJSON))

// const dataBuffer = fs.readFileSync('1-json.json')
// const data = JSON.parse(dataBuffer.toString())


// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const user = JSON.parse(dataBuffer.toString())

console.log(user)

user.name = 'alex'
user.age = 30

const userJSON = JSON.stringify(user)

fs.writeFileSync('1-json.json', userJSON)