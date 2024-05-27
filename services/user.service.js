const { userSchema } = require("../models");

let register = (body) => {
  return userSchema.create(body);
};

let getAllUser = () => {
  return userSchema.find();
};

module.exports = { register, getAllUser };
