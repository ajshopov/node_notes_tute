const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')


yargs.version('1.1.0')

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Da body',
      demandOption: true,
      type: 'string'
    }
  },
  handler (argv) {
    console.log(`Title: ${argv.title}`)
    console.log(`Body: ${argv.body}`)
    notes.addNote(argv.title, argv.body)
  }
})

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler (argv) {
    console.log('removing a note')
    notes.removeNote(argv.title)
  }
})

yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler (argv) {
    console.log('read a note')
    notes.readNote(argv.title)
  }
})

yargs.command({
  command: 'list',
  describe: 'Listing all notes',
  handler () {
    console.log('listing all notes')
    notes.listNotes()
  }
})

// console.log(yargs.argv)
yargs.parse()

// console.log(process.argv)
// const command = process.argv[2]

// if (command === 'add') {
//   console.log('adding note')
// } else if (command === 'remove') {
//   console.log('removing note')
// }