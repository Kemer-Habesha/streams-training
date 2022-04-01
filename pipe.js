// FS
const fs = require("fs");

// Path
const path = require("path");

// File path
const filePath = path.join(process.cwd(), "data/data.txt");

// Copy path
const copyPath = path.join(process.cwd(), "data/copy.txt");

// Readable stream - Default high water mark
const file = fs.createReadStream(filePath);

// Writable stream
const copy = fs.createWriteStream(copyPath);

// Use pipe
file.pipe(copy);

// Manual piping
// file.myPipe = function (writableStream) {
//   // Read data
//   this.on("data", (data) => {
//     writableStream.write(data.toString());
//     writableStream.end();
//   });
//   this.on("end", () => {
//     console.log("Successfully piped");
//   });
// };

// file.myPipe(copy);
