const express = require("express");
const router = express.Router();
const apiController = require("../controller/apiController");

// API get base route
router.get("/", apiController.getAPI);

// get coordinates and check them
router.get("/check", apiController.getCoordinateComparison);

// post a new user
router.post("/newuser", apiController.postNewUser);

// put user
router.put("/putuser/:id", apiController.putUser);

// GET win
router.get("/checkwin/:id", apiController.getWin);

// put user timer
router.put("/puttimer/:id", apiController.putTimer);

// get difference between start and finish
router.get("/getfinaltime/:id", apiController.getFinalTime);

// put new username
router.put("/putname/:id", apiController.putNewUsername);

module.exports = router;
