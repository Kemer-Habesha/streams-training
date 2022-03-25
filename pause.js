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

readStream.on("readable", () => {
  let data = readStream.read();
  while (data) {
    arrOfBuffers.push(data);
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
