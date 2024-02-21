const express = require("express");

const fs = require("fs");

const routes = express.Router();

routes.get("/", (req, res, next) => {
  fs.readFile("messages.txt", (err, data) => {
    if (err) {
      data = "No chat found!";
    }
    res.send(
      `${data} <br/>  <br/> 
      <form action="/" method="POST" onSubmit = "document.getElementById('userId').value=localStorage.getItem('username')">
      <input type="text" name ="message"><br/>
      <input type="hidden" name ="user" id="userId"> 
      <button type="submit">send</button></form>`
    );
  });
});

routes.post("/", (req, res, next) => {
  fs.writeFile(
    "messages.txt",
    ` ${req.body.user} : ${req.body.message} `,
    { flag: "a" }, //Instead of replacing append only in text file
    (err) => {
      err ? console.log(err) : res.redirect("/");
    }
  );
});

module.exports = routes;
