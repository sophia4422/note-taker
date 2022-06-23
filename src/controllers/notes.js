const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

// const { renderHomePage, renderNotePage } = require("./view");

const { readFromFile, writeToFile } = require("../utils");

const getNotes = (req, res) => {
  //read from file
  const notes = readFromFile();
  //return response
  return res.json(notes);
};

const deleteNote = (req, res) => {
  res.json("delete");
  //get id of note from request
  const { id } = req.params;
  //get all notes from file
  const notesData = readFromFile();
  //remove note from notes
  const filteredNotes = notesData.filter((note) => note.id !== id);
  //writ to file
  writeToFile(filteredNotes);
  //return
  return res.json(notesData);
};

const createNote = (req, res) => {
  // res.json("create");
  const { title, text } = req.body;

  //uuid
  const id = uuidv4();

  //payload
  const note = {
    id,
    title,
    text,
  };

  //get notes
  let notesData = readFromFile();

  //push to array
  notesData.push(note);

  //write to file
  writeToFile(notesData);

  return res.json(notesData);
};

module.exports = {
  getNotes,
  deleteNote,
  createNote,
};
