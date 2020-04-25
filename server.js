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

if (process.env.NODE_ENV === "production") {
  corsOptions = {
    origin: "https://simple-mevn-cc.herokuapp.com/"
  };
}

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist"));
}

require("./routes/tutorial.routes")(app);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});

// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});