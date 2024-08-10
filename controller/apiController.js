const asyncHandler = require("express-async-handler");
const coordCompare = require("../services/checkCoords").coordCompare;
const newUser = require("../services/userCreate").newUser;
const updateUser = require("../services/userUpdate").updateUser;
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

  const test = await updateUser(req.params.id, req.body.id);
  console.log(test.matchone);
  return res.json("ok");
});
