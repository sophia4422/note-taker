const getNotes = (req, res) => {
  res.json("getnotes");
};

const deleteNote = (req, res) => {
  res.json("delete");
};

const createNote = (req, res) => {
  res.json("create");
};

module.exports = {
  getNotes,
  deleteNote,
  createNote,
};
