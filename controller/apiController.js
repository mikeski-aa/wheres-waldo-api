const asyncHandler = require("express-async-handler");

exports.getAPI = asyncHandler(async (req, res, next) => {
  res.json({ message: "API called" });
});
