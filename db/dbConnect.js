let mongoose = require("mongoose");
let connectDB = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("Database connected success");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
