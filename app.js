const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name ="product"><button type="submit">Add</button></form>'
  );
  console.log("in the middleware");
});

app.post("/product", (req, res, next) => {
  console.log(req.body.product);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<p>Hello There</p>");
});

app.listen(3000);
