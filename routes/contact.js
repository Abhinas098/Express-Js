const express = require("express");

const path = require("path");

const rootDir = require("../utill/path");

const route = express.Router();

route.get("/contact", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "contactUs.html"));
});

route.post("/success", (req, res) => {
  console.log(req.body);
  res.send(`<h2 style="color: green;" > Successfully Submitted!</h2>`);
});

module.exports = route;
