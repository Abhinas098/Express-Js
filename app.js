
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("in the middleware");
  next(); //Its allow the request to continue to the next middleware
});
app.use((req, res, next) => {
  console.log("in the next middleware");
  res.send("<p>Hello There</p>"); //Express.js will automatically set the Content-Type header 
});

app.listen(3000);
