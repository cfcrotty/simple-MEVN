if (process.env.JAWSDB_URL) {
  // // Set up MySQL connection.
  // const mysql = require("mysql2");

  // let connection;
  // connection = mysql.createConnection(process.env.JAWSDB_URL);
  // // Make connection.
  // connection.connect(err => {
  //   if (err) {
  //     console.error("error connecting: " + err.stack);
  //     return;
  //   }
  //   console.log("connected as id " + connection.threadId);
  // });

  // // Export connection for our ORM to use.
  // module.exports = connection;
  const dbConfig = require("./../config/db.config.js");
  
  const Sequelize = require("sequelize");
  const sequelize = new Sequelize("ux3rh9j3giiuw43u", "bgl11gwi76s6fncx", "dddwcs19yfesp12q", {
    host: "s554ongw9quh1xjs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    operatorsAliases: 0,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });

  const db = {};

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

  module.exports = db;
} else {

  const dbConfig = require("./../config/db.config.js");

  const Sequelize = require("sequelize");
  const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });

  const db = {};

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

  module.exports = db;

}

