const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
  return 'your notes'
}

const addNote = (title, body) => {
  const notes = loadNotes()
  // console.log(notes)
  const duplicateNotes = notes.filter((note) => {
    return note.title === title
  })
  if (duplicateNotes.length === 0) {
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
  const notesToKeep = notes.filter((note) => {
    return note.title !== title
  })
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

module.exports = { getNotes, addNote, removeNote }