const asyncHandler = require("express-async-handler");
const coordCompare = require("../services/checkCoords").coordCompare;
const newUser = require("../services/userCreate").newUser;

// call main api
exports.getAPI = asyncHandler(async (req, res, next) => {
  res.json({ message: "API called" });
});

// compare coords
exports.getCoordinateComparison = asyncHandler(async (req, res, next) => {
  if (!req.query.xcoord || !req.query.ycoord) {
    return res.json({ message: "Error, input coordinates missing" });
  }

  const result = await coordCompare(req.query.xcoord, req.query.ycoord);

  if (!result) {
    return res.json({ message: "Not correct, keep trying" });
  }
});

// POST new user
exports.postNewUser = asyncHandler(async (req, res, next) => {
  console.log("test");
  const response = await newUser();
  console.log(response);

  return res.json(response);
});
