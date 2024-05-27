let express = require("express");
const { userController } = require("../controller");
let route = express.Router();

route.get("/get", userController.getUser);
route.post("/register", userController.register);

module.exports = route;
