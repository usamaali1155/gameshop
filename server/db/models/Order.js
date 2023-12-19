
const Sequelize = require('sequelize')

const db = require('../db')

const Order = db.define('order', {
    status: {
        type: Sequelize.STRING,
        defaultValue: 'pending',
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    total: {
        type: Sequelize.DECIMAL(10,2),
        defaultValue: 0.00
    }
})

module.exports = Order;