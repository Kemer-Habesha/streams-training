// FS
const fs = require("fs");

// Path
const path = require("path");

// Pipe line
const { pipeline } = require("stream");

// File path
const filePath = path.join(process.cwd(), "data/data.txt");

// Copy path
const copyPath = path.join(process.cwd(), "data/copy.txt");

// Readable stream - Default high water mark
const file = fs.createReadStream(filePath);

// Writable stream
const copy = fs.createWriteStream(copyPath);

// Use pipe
pipeline(file, copy, function (err) {
  if (err) {
    console.log(`Error - ${err}`);
  }
  console.log("Success");
});
