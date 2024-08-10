const express = require("express");
const router = express.Router();
const apiController = require("../controller/apiController");

// API get base route
router.get("/", apiController.getAPI);

// get coordinates and check them
router.get("/check", apiController.getCoordinateComparison);

// post a new user
router.post("/newuser", apiController.postNewUser);

router.put("/putuser/", (req, res) => {
  res.send("dd");
});

// update user
router.put("/putuser/:id", apiController.putUser);

module.exports = router;
