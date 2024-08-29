const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/index.js");
const Products = require("./modelProducts.js");

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
