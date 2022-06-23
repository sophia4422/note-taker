const express = require("express");
const { getNotes, deleteNote, createNote } = require("../controllers/notes");

const router = express.Router();

router.get("/", getNotes);
router.delete("/:id", deleteNote);
router.post("/", createNote);

module.exports = router;
