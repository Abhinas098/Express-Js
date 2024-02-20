const express = require("express");

const bodyParser = require("body-parser");
const app = express();

const homeRoute = require("./routes/home");
const adminRoute = require("./routes/admin");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoute);
app.use(homeRoute);

app.use((req, res, next) => {
  res.status(404).send("<h2>Not found!</h2>");
});

app.listen(3000);
