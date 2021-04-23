const path = require("path");
const express = require("express");
const logger = require("morgan");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
const routes = require("./routes/htmlRoutes.js");
require("dotenv").config();

const app = express();

app.use(logger("dev"));

// app.use(express.cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGOD_URI || "mongodb://localhost/recipes", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

app.use(
  session({
    secret: "recipeses",
    maxAge: new Date(Date.now() + 3600000),
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
      mongoUrl: process.env.MONGOD_URI || "mongodb://localhost/recipes",
    }),
  })
);

app.use(express.static("client/build"));

//   if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
//   }

app.use(routes);

app.listen(process.env.PORT || 3000, () => console.log("Now listening"));
