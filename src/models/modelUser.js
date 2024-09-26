const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/index.js");
const Products = require("./modelProducts.js");

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = User;
