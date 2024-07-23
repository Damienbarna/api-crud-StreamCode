const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/index.js");

const Products = sequelize.define("products", {
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  image: DataTypes.STRING,
  category: DataTypes.STRING,
  langage: DataTypes.STRING,
  url: DataTypes.STRING,
  userId: DataTypes.INTEGER,
});

module.exports = { Products };
