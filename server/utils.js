const fs = require("fs");
const path = require("path");

const readFromFile = (fileName) => {
  try {
    const filePath = path.join();

    const data = fs.readFileSync(filePath, "utf8");

    return JSON.parse(data);
  } catch (error) {
    console.log(`[ERROR: ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to read file",
    });
  }
};

const writeToFile = (fileName, data) => {
  try {
    const filePath = path.join();

    return fs.writeFileSync(filePath, JSON.stringify(data));
  } catch (error) {
    console.log(`[ERROR: ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to write to database",
    });
  }
};

module.exports = { readFromFile, writeToFile };
