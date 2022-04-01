// FS
const fs = require("fs");

// Path
const path = require("path");

// File path
const copyPath = path.join(process.cwd(), "data/file.txt");

// Copy path
const filePath = path.join(process.cwd(), "data/data.txt");

// Readable Stream
const readStream = fs.createReadStream(filePath, { highWaterMark: 100 });

// Writable stream
const writeStream = fs.createWriteStream(copyPath);

// Array of buffers
const arrOfBuffers = [];

readStream.on("data", (data) => {
  arrOfBuffers.push(data);
});

readStream.on("end", () => {
  let content = Buffer.concat(arrOfBuffers).toString();
  writeStream.write(content);
  writeStream.end(() => {
    console.log("File successfully copied");
  });
});

readStream.on("error", (err) => {
  console.log("Error ------->");
  console.log(err);
});

// Write on the file
// writeStream.write("Hello everyone.");
// writeStream.end(() => {
//   console.log("Successfully finished");
// });

// Write using end
// writeStream.end("Hello everyone",() => {
//   console.log("Successfully finished");
// });

// Copy
