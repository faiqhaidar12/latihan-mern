const express = require("express");

const app = express();

app.use(() => {
  console.log("hello server");
  console.log("hello server lagi");
  console.log("hello server lagiiiii");
  console.log("hello server lagiiiiis");
});

app.listen(4000);
