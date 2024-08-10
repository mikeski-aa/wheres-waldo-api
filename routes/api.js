const express = require("express");
const router = express.Router();
const apiController = require("../controller/apiController");

// API get base route
router.get("/", apiController.getAPI);

module.exports = router;
