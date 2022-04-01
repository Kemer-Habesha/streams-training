// FS
const fs = require("fs");

// Path
const path = require("path");

// Transform stream
const { Transform } = require("stream");

// File path
const filePath = path.join(process.cwd(), "data/data.txt");

// Copy path
const transformedPath = path.join(process.cwd(), "data/tranform.txt");

// Readable stream - Default high water mark
const file = fs.createReadStream(filePath);

// Writable stream
const transformed = fs.createWriteStream(transformedPath);

// {}.tranform

// Create transform stream W R
const t = new Transform({
  transform: function (data, encoding, callback) {
    callback(null, data.toString().toUpperCase());
  },
});

const tTwo = new Transform({
  transform: function (data, encoding, callback) {
    callback(null, data.toString().toLowerCase());
  },
});

file.pipe(t).pipe(transformed);
