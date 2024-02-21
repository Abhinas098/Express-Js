const express = require("express");
const fs = require("fs");

const routes = express.Router();

routes.get("/login", (req, res, next) => {
  res.send(
    ' <form onSubmit="localStorage.setItem(`username`,document.getElementById(`username`).value) "  action="/product"  method="POST"> <input id="username" type="text"> <button type="submit">login</button></form>'
  );
});

module.exports = routes;
