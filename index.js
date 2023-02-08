const express = require("express");
const app = express();
const birdsRouter = require("./routes/birdsRouter");
const pigRouter = require("./routes/pigRouter");
const port = 9000;

const users = [
  { name: "wai", email: "wai@gmail.com", age: 12 },
  { name: "hin", email: "hin@gmail.com", age: 16 },
  { name: "soe", email: "soe@gmail.com", age: 19 },
];

app.use(express.static("public"));
app.set("views", "./views");
app.set("views engine", "pug");
app.use((req, res, next) => {
  console.log(req.url);
  console.log("Time :", Date.now());
  next();
});

app.get("/profile", (req, res) => {
  res.render("profile.pug", { title: "Hey", message: "Hello there!" });
});

app.get("/avatar", (req, res) => {
  res.sendFile(`${__dirname}/octopus.jpg`);
});

app.use("/birds", birdsRouter);
app.use("/pigs", pigRouter);

app.listen(port, () => {
  console.log(`server is listening at port ${port}`);
});

// app
//   .route("/users")
//   .get((req, res) => {
//     res.send(users);
//   })
//   .post((req, res) => {
//     res.send("Post new data");
//   })
//   .put((req, res) => {
//     res.send("Edit existing data");
//   })
//   .delete((req, res) => {
//     res.send("delete Data");
//   });
