const path = require("path");

const renderHomePage = (req, res) => {
  // res.json("renderhome");
  //render the html file
  const filePath = path.join(__dirname, "../../public/index.html");

  //send file
  return res.sendFile(filePath);
};

const renderNotePage = (req, res) => {
  // res.json("rendernote");
  const filePath = path.join(__dirname, "../../public/notes.html");

  //send file
  return res.sendFile(filePath);
};

module.exports = {
  renderHomePage,
  renderNotePage,
};
