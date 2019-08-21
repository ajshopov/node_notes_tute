const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find((note) => note.title === title)

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log(chalk.green('new note saved'))
  } else {
    console.log(chalk.red('note title taken'))
  }
}

const removeNote = (title) => {
  const notes = loadNotes()
  const notesToKeep = notes.filter((note) => note.title !== title)
  if (notes.length > notesToKeep.length){
    console.log(chalk.green('updated'))
  } else {
    console.log(chalk.red('no match found'))
  }
  saveNotes(notesToKeep)
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}


const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (error) {
    return []
  }
}

const listNotes = () => {
  console.log(chalk.blue.inverse('Your Notes'))
  loadNotes().forEach(element => {
    console.log(chalk.bold(element.title))
    console.log(element.body)
  })
}

const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title)
  if (note) {
    console.log(chalk.inverse(note.title))
    console.log(note.body)
  } else {
    console.log(chalk.red('note not found'))
  }
}


module.exports = { addNote, removeNote, listNotes, readNote }