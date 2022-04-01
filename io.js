process.stdin.on("data", (data) => {
  const content = data.toString().toUpperCase();
  process.stdout.write(content);
  process.stdout.end(() => {
    console.log("Finished");
  });
});
