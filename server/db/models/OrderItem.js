const Sequelize = require('sequelize')

const db = require('../db')

const OrderItem = db.define('orderitem', {
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            min: 1,
        },
    },
    price : {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
    }
});


module.exports = OrderItem;