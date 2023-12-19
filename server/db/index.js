const db = require('./db')


const User = require('./models/User')
const Product = require('./models/Product')
const Order = require('./models/Order')
const CartItem = require('./models/CartItem')
const OrderItem = require('./models/OrderItem')

User.hasMany(Order)
Order.belongsTo(User)
User.hasMany(CartItem)
CartItem.belongsTo(User)
Product.hasMany(CartItem)
CartItem.belongsTo(Product)
Order.belongsToMany(Product, { through: OrderItem })
Product.belongsToMany(Order, { through: OrderItem })


module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    CartItem,
    OrderItem,
  },
}
