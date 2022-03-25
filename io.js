process.stdin.on("data", (data) => {
  const name = data.toString().toUpperCase();
  if (name !== "") {
    process.stdout.write(name);
  } else {
    process.stderr.write(name);
  }
});
