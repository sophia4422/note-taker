const express = require("express");
const { renderHomePage, renderNotePage } = require("../controllers/view");

const router = express.Router();

router.get("/", renderHomePage);
router.get("/notes", renderNotePage);

module.exports = router;
