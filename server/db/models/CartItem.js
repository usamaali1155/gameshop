const Sequelize = require('sequelize')

const db = require('../db')

const CartItem = db.define('cartitem', {
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
            isInt: true,
            min: 1,
        }
    },
})

module.exports = CartItem;