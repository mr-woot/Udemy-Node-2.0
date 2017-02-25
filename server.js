const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs
                .command('add', 'Add a new note', {
                    title: {
                        describe: 'Title of note',
                        demand: true,
                        alias: 't'
                    },
                    body: {
                        describe: 'Body of note',
                        demand: true,
                        alias: 'b'
                    }
                })
                .command('remove', 'Remove a note', {
                    title: {
                        describe: 'Title of note to be deleted',
                        demand: true,
                        alias: 't'
                    }
                })
                .command('list', 'List all notes')
                .command('read', 'Read a specific note', {
                    title: {
                        describe: 'Title of note to be read',
                        demand: true,
                        alias: 't'
                    }
                })
                .help()
                .argv;

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
        notes.logNote(el.title, el.body);
    }, this);
} else if (command === 'read') {
    var note = notes.readNote(argv.title);
    if (note !== undefined) {
        notes.logNote(note.title, note.body);
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