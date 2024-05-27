const { userService } = require("../services");

let getUser = async (req, res) => {
  let result = await userService.getAllUser();

  res.status(200).json({
    message: "get all user successfully",
    result,
  });
};

let register = async (req, res) => {
  let body = req.body;

  let result = await userService.register(body);

  res.status(201).json({
    message: "user created successfully",
    result,
  });

  console.log(result);
};

module.exports = { getUser, register };
