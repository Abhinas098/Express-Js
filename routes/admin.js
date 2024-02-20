const express = require("express");

const routes = express.Router();

routes.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name ="product"><button type="submit">Add</button></form>'
  );
  console.log("in the middleware");
});

routes.post("/product", (req, res, next) => {
  console.log(req.body.product);
  res.redirect("/");
});

module.exports = routes;
