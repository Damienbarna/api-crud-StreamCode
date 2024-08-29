const { Sequelize } = require("sequelize");
const login = require("./credentials.js");

const sequelize = new Sequelize(
  login.database,
  login.username,
  login.password,
  {
    host: "localhost",
    dialect: "mysql",
  }
);
sequelize
  .authenticate()
  .then(() => console.log("connecté à la bdd"))
  .catch((error) =>
    console.error("impossible de ca connecter à la bdd :", error)
  );

sequelize.sync({ alter: true }).then(async () => {
  console.log("Modèles et tables synchronisés.");
});

module.exports.sequelize = sequelize;
require("../models/modelProducts.js");
require("../models/modelUser.js");
