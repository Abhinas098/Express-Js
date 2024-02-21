const express = require("express");

const path = require("path");

const bodyParser = require("body-parser");
const app = express();

const homeRoute = require("./routes/home");
const adminRoute = require("./routes/admin");
const contactRoute = require("./routes/contact");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoute);
app.use(homeRoute);
app.use(contactRoute);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
