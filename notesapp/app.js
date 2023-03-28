// const notes = require("./notes.js");
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const { demandOption } = require('yargs');


yargs.version('1.0.1')

yargs.command({
    command: 'add',
    description: 'Adds new note!',
    builder: {
        title: {
            description: 'Note Title',
            demandOption: true,
            type: 'string',
        },
        body: {
            description: 'Note Body',
            demandOption: true,
            type: 'string',
        }
    },

    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

yargs.command({
    command: 'remove',
    description: 'Removes a note!',
    handler: function () {
        console.log('This removes a note!');
    }
})

yargs.command({
    command: 'list',
    description: 'List all notes',
    handler: function () {
        console.log('This list all notes!');
    }
})

yargs.command({
    command: 'read',
    description: 'Read a note',
    handler: function () {
        console.log('This read a note!');
    }
})


yargs.parse()