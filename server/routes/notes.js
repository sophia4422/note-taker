const express = require("express");
const { getNotes } = require("../controllers/notes");

const router = express.Router();

router.get("/", getNotes);

// router.delete("/:id");

// router.post("/");

module.exports = router;
