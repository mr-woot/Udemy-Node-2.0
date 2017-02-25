const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const argv = require('yargs').argv;

const notes = require('./notes');

var command = process.argv[2];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created successfully');
        console.log('--');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    } else {
        console.log("Note title taken.");
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.readNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Wrong argument');
}