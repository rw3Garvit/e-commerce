let express = require("express");
let route = express.Router();

route.get("/get", (req, res) => {
  res.status(200).json({
    message: "user get success",
  });
});

module.exports = route;
