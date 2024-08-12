const express = require("express");
const router = express.Router();
const apiController = require("../controller/apiController");
const cleanLeaderboard = require("../middleware/cleanup").cleanLeaderboard;

// API get base route
router.get("/", apiController.getAPI);

// router.get("/", function (req, res, next) {
//   res.json({ message: "API called" });
// });

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

// put final time
router.put("/putfinaltime", apiController.putGameTime);

// get leaderboards
router.get("/getleaderboards", cleanLeaderboard, apiController.getLeaderboards);

module.exports = router;
