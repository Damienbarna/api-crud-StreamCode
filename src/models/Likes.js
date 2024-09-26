const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/index.js");
const User = require("./modelUser.js");
const { Products } = require("./modelProducts.js");

const Likes = sequelize.define("Likes", {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "id",
    },
  },
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: Products,
      key: "id",
    },
  },
});

module.exports = { Likes };
