// FS
const fs = require("fs");

// Path
const path = require("path");

// File path
const filePath = path.join(process.cwd(), "data/data.txt");

// Readable stream
const readStream = fs.createReadStream(filePath, { highWaterMark: 100 });

// Array of buffers
const arrOfBuffers = [];

/**
 * let n = 7;
 * while(n > 0) {
 * console.log(n);
 * n--;
 * }
 */

readStream.on("readable", () => {
  let data = readStream.read();
  // data === null
  while (data) {
    arrOfBuffers.push(data);
    console.log(data);
    data = readStream.read();
  }
});

// After reading is finished
readStream.on("end", () => {
  console.log(Buffer.concat(arrOfBuffers).toString());
});

// Error handling
readStream.on("error", (err) => {
  console.log("Error ------->");
  console.log(err);
});
