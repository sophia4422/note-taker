const { renderHomePage, renderNotePage } = require("./view");

const getNotes = (req, res) => {
  res.json("getnotes");
  //read from file

  //return response
};

const deleteNote = (req, res) => {
  res.json("delete");
  //get id of note from request
  //get all notes from file
  //remove note from notes
  //writ to file
};

const createNote = (req, res) => {
  res.json("create");
};

module.exports = {
  getNotes,
  deleteNote,
  createNote,
};
