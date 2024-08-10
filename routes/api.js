const express = require("express");
const router = express.Router();
const apiController = require("../controller/apiController");

// API get base route
router.get("/", apiController.getAPI);

router.get("/check", apiController.getCoordinateComparison);

module.exports = router;
