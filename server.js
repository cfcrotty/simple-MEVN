const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const path = require('path');

const app = express();

app.use(morgan("tiny"));
var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());
// app.use(bodyParser.text());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

require("./routes/tutorial.routes")(app);
// simple route
// app.get("*", (req, res) => {
//   res.json({ message: "Welcome to MEVN application." });
// });

app.get("*", function(req, res) {
  //res.sendFile(path.join(__dirname, "./client/build/index.html"));
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});