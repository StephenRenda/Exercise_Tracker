const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

// // Serve static files if in production or running in docker
// if (
//   process.env.NODE_ENV === "production" ||
//   process.env.NODE_ENV === "docker"
// ) {
//   // Set static folder
//   app.use(express.static(path.join(__dirname, "../build")));

//   app.get("/*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../build", "index.html"));
//   });
// }

// if (process.env.NODE_ENV === "production") {
//   // Exprees will serve up production assets
//   app.use(express.static("../public"));

//   // Express serve up index.html file if it doesn't recognize route
//   const path = require("path");
//   app.get("*", (req, res) => {
//     res.sendfile("../public/index.html");
//   });
// }

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
