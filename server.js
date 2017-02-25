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
    var allNotes = notes.getAll();
    allNotes.forEach(function(el) {
        console.log(`\nTitle: ${el.title}`);
        console.log(`Body: ${el.body}\n`);
    }, this);
} else if (command === 'read') {
    var note = notes.readNote(argv.title);
    if (note !== undefined) {
        console.log(`Title: ${note.title}\nBody: ${note.body}`);
    } else {
        console.log('Note doesn\'t exist');
    }
} else if (command === 'remove') {
    if (notes.removeNote(argv.title)) {
        console.log(`Note removed: ${argv.title}`);
    } else {
        console.log('Note doesn\'t exist.');
    }
} else {
    console.log('Wrong argument');
}