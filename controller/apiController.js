const asyncHandler = require("express-async-handler");
const coordCompare = require("../services/checkCoords").coordCompare;
const newUser = require("../services/userCreate").newUser;
const updateUser = require("../services/userUpdate").updateUser;
const checkWin = require("../services/checkWin").checkWin;
const stopTimer = require("../services/stopTimer").stopTimer;
const getTime = require("../services/getTime").getTime;
const putUsername = require("../services/putUsername").putUsername;
const putFinalTime = require("../services/putFinalTime").putFinalTime;
const { body, validationResult } = require("express-validator");

// call main api
exports.getAPI = asyncHandler(async (req, res, next) => {
  res.json({ message: "API called" });
});

// compare coords
exports.getCoordinateComparison = asyncHandler(async (req, res, next) => {
  // req coordinates OK check
  if (!req.query.xcoord || !req.query.ycoord || !req.query.targetid) {
    return res.json({ message: "Error, input coordinates missing" });
  }

  const result = await coordCompare(
    req.query.xcoord,
    req.query.ycoord,
    req.query.targetid
  );

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
  console.log("REQ PARAMS ID => IS IT BEING SENT?");
  console.log(req.params.id);

  const response = await checkWin(req.params.id);

  console.log(response);
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

// put username
exports.putNewUsername = [
  body("username").trim().isLength({ min: 1 }).escape(),
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.json(errors.array());
    }

    const response = await putUsername(req.params.id, req.body.username);

    return res.json(response);
  }),
];

// put final time
exports.putGameTime = asyncHandler(async (req, res, next) => {
  // check values are present in the url
  if (!req.query.userid || !req.query.time) {
    return res.json({ message: "Missing query params" });
  }

  const response = await putFinalTime(req.query.userid, req.query.time);
  return res.json(response);
});
