const express = require("express");
const router = express.Router();

const birdsData = [
  { name: "SarBale", age: 0.5 },
  { name: "Falcon", age: 30 },
];

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.get("/", (req, res) => {
  res.send("This is birdsRouter");
});

router.get("/about", (req, res) => {
  res.send("This about birdsRouter");
});

router.post("/about", (req, res) => {
  res.send(birdsData);
});

module.exports = router;
