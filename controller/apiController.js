const asyncHandler = require("express-async-handler");
const coordCompare = require("../services/checkCoords").coordCompare;
const newUser = require("../services/userCreate").newUser;
const updateUser = require("../services/userUpdate").updateUser;
const checkWin = require("../services/checkWin").checkWin;
const stopTimer = require("../services/stopTimer").stopTimer;
const getTime = require("../services/getTime").getTime;

// call main api
exports.getAPI = asyncHandler(async (req, res, next) => {
  res.json({ message: "API called" });
});

// compare coords
exports.getCoordinateComparison = asyncHandler(async (req, res, next) => {
  // req coordinates OK check
  if (!req.query.xcoord || !req.query.ycoord) {
    return res.json({ message: "Error, input coordinates missing" });
  }

  const result = await coordCompare(req.query.xcoord, req.query.ycoord);

  // no match found response
  if (!result) {
    return res.json(false);
  }

  // results are valid, send response
  return res.json(result);
});

// POST new user
exports.postNewUser = asyncHandler(async (req, res, next) => {
  console.log("test");
  const response = await newUser();
  console.log(response);

  return res.json(response);
});

// PUT user
exports.putUser = asyncHandler(async (req, res, next) => {
  // check if ID or body are missing
  if (
    typeof req.body.id === "undefined" ||
    typeof req.params.id === "undefined"
  ) {
    return res.json({ message: "Missing body ID or params ID!" });
  }

  const response = await updateUser(req.params.id, req.body.id);
  return res.json("ok");
});

// get win condition true or false
exports.getWin = asyncHandler(async (req, res, next) => {
  // check if the ID was parsed correctly
  if (!req.params.id) {
    return res.json({ message: "User ID is missing!" });
  }

  const response = await checkWin(req.params.id);

  return res.json(response);
});

// put user to stop timer
exports.putTimer = asyncHandler(async (req, res, next) => {
  if (!req.params.id) {
    return res.json({ message: "User ID is missing!" });
  }

  const response = await stopTimer(req.params.id);
  return res.json(response);
});

// get final time
exports.getFinalTime = asyncHandler(async (req, res, next) => {
  if (!req.params.id) {
    return res.json({ message: "User ID is missing!" });
  }

  const response = await getTime(req.params.id);
  return res.json(response);
});
