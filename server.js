const express = require("express");
const cors = require("cors"); // Cross Origin Resource
const session = require("express-session");
const app = express();

const mongoose = require("mongoose");
require("dotenv/config");

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// IMPORT ROUTES
const accountRoute = require("./routes/account");
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);
app.use("/account", accountRoute);

// // DATABASE
mongoose.connect(process.env.DATABASE_SERVER, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection to MongoDB: Error"));
db.once("open", function () {
  console.log("Connected to DB.");
});

//Listen to server
app.listen(process.env.SERVER_PORT, () => {
  console.log(`Listening at port ${process.env.SERVER_PORT}.`);
});
