const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});
router
  .route("/home")
  .get((req, res) => {
    res.send("This is pig get");
  })
  .post((req, res) => {
    res.send("This is pig post");
  });

module.exports = router;
