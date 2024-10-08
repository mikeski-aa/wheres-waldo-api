const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

// cors package requierd to allow cross-origins requests to the APIs
const corsOptions = {
  origin: [process.env.ORIGIN_URL, process.env.ALTERNATIVE_URL],
};

const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");

var app = express();
// var listener = app.listen(3000, function () {
//   console.log("Listening on port " + listener.address().port); //Listening on port 3000
// });

app.use(cors(corsOptions));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api", apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err.status);
});

module.exports = app;
