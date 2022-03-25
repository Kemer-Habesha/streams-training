// FS
const fs = require("fs");

// Path
const path = require("path");

// File path
const filePath = path.join(process.cwd(), "data/data.txt");

// Read the file using stream
const readStream = fs.createReadStream(filePath, { highWaterMark: 100 });

// Array of buffers
const arrOfBuffers = [];

// Stat of the file
// fs.stat(filePath, (err, stat) => {
//   if (err) return `Error - ${err}`;
//   console.log(stat);
// });

// Start reading
readStream.on("data", (data) => {
  console.log(data);
  arrOfBuffers.push(data);
});

// When reading is finished
readStream.on("end", () => {
  console.log(Buffer.concat(arrOfBuffers).toString());
});

// Handle error
readStream.on("error", (err) => {
  console.log("Error -----> ");
  console.log(err);
});
