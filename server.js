require("dotenv").config();
let http = require("http");
let express = require("express");
let app = express();
let connectDB = require("./db/dbConnect");
let routes = require("./routes");
const bodyParser = require("body-parser");

//for json body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
app.use("/v1", routes);

//database connection
connectDB();
//server
http.createServer(app).listen(process.env.PORT, () => {
  console.log("server started");
});
