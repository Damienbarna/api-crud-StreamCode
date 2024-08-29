const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/index.js");
const User = require("./modelUser.js");

const Products = sequelize.define("products", {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "id",
    },
  },
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  image: DataTypes.STRING,
  category: DataTypes.STRING,
  langage: DataTypes.STRING,
  url: DataTypes.STRING,
});

User.hasMany(Products, {
  foreignKey: "userId",
});

Products.belongsTo(User, {
  foreignKey: "userId",
});

module.exports = { Products };
