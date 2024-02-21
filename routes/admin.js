const express = require("express");

const path = require("path");

const routes = express.Router();

routes.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add_product.html"));
  console.log("in the middleware");
});

routes.post("/add-product", (req, res, next) => {
  console.log(req.body.product);
  res.redirect("/");
});

module.exports = routes;
