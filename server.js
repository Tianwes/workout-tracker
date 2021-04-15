const express = require("express");
const mongoose = require("mongoose");
// HTTP request logger middleware for node.js
const morgan = require("morgan");

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// ??????????? How to use morgan ??????????
// three arguments tokens, req, and res,
//  where tokens is an object with all defined tokens,
//  req is the HTTP request and res is the HTTP response.
app.use(morgan("dev"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});