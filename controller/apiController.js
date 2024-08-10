const asyncHandler = require("express-async-handler");
const coordCompare = require("../services/checkCoords").coordCompare;

// call main api
exports.getAPI = asyncHandler(async (req, res, next) => {
  res.json({ message: "API called" });
});

//
exports.getCoordinateComparison = asyncHandler(async (req, res, next) => {
  if (!req.query.xcoord || !req.query.ycoord) {
    return res.json({ message: "Error, input coordinates missing" });
  }

  const result = await coordCompare(req.query.xcoord, req.query.ycoord);

  if (!result) {
    return res.json({ message: "Not correct, keep trying" });
  }
});
