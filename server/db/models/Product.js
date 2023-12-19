const Sequelize = require("sequelize");

const db = require("../db");

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: {
      validate: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    notEmpty: {
      validate: true,
    },
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  inventory: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://via.placeholder.com/150",
  },
  genre: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Product;
