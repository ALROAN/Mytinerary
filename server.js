const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const cookieParser = require('cookie-parser');
const withAuth = require("./middleware/middleware")
const userModel = require("./models/UserModel")

// const path = require("path");
console.log("in");

// Bodyparser Middleware
app.use(bodyParser.json());
app.use(cookieParser());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }) // Adding new mongo url parser
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

async function main() {
  await app.listen(port);
  console.log(`Server started on port ${port}`);
}
main();

// middleweares
app.use(cors());
app.use(express.json());
app.get('/checkToken', withAuth, function (req, res) {
  console.log(req.email);
  userModel.findOne({ email: req.email }).select("-password").then(user => res.send(user))
});

// routes
app.use("/api/cities", require("./routes/CitiesRoutes"));
app.use("/api/itineraries", require("./routes/ItineraryRoutes"));
app.use("/api/activities", require("./routes/ActivitiesRoutes"));
app.use("/api/user", require("./routes/UserRoutes"));
