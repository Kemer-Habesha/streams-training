// FS
const fs = require("fs");

// Path
const path = require("path");

// File path
const filePath = path.join(process.cwd(), "data/file.txt");

// Writable stream
const writeStream = fs.createWriteStream(filePath);

// Write on the file
writeStream.write("Hello everyone.");
writeStream.end(() => {
  console.log("Successfully finished");
});

// Write using end
// writeStream.end("Hello everyone", () => {
//   console.log("Successfully finished");
// });
