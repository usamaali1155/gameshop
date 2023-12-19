'use strict'

const { db, models: { User, Product, CartItem, Order, OrderItem } } = require('../server/db')

async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')
  const users = await Promise.all([
    User.create({
      username: 'user1',
      firstname: 'Usama',
      lastname: 'Ali',
      email: 'ua2543014@gmail.com',
      street: 'Raheel Street',
      city: 'Lahore',
      state: 'PK',
      zip: 35103,
      password: 'password123',
      isAdmin: true,
    }),
    User.create({
      username: 'user2',
      firstname: 'Adeel',
      lastname: 'Ahmad',
      email: 'adeel@gmail.com',
      street: 'Raheel Street',
      city: 'Lahore',
      state: 'PK',
      zip: 35103,
      password: 'password123',
      isAdmin: false,
    }),
    User.create({
      username: 'user3',
      firstname: 'Sibghat',
      lastname: 'Ullah',
      email: 'sibghat@gmail.com',
      street: 'Raheel Street',
      city: 'Lahore',
      state: 'PK',
      zip: 35103,
      password: 'password123',
      isAdmin: false,
    }),
  ])

  const products = await Promise.all([
    Product.create({
      name: 'Diablo IV',
      description: 'Diablo® IV is the next-gen action RPG experience with endless evil to slaughter, countless abilities to master, nightmarish Dungeons, and legendary loot. Embark on the campaign solo or with friends, meeting memorable characters through beautifully dark settings and a gripping story, or explore an expansive end game and shared world where players can meet in towns to trade, team up to battle World Bosses, or descend into PVP zones to test their skills against other players - no lobbies necessary - with cross-play and cross-progression on all available platforms. This is only the beginning for Diablo® IV, with new events, stories, seasons, rewards, and more looming on the horizon.',
      price: 64.99,
      inventory: 10,
      imageUrl: '/images/Diablo IV.jpg',
      genre: 'RPG'
    }),
    Product.create({
      name: 'Wild Hearts',
      description: 'Wild Hearts is a fresh take on adventure where the use of the ancient technology, Karakuri, allows you to wield a power strong enough to take down ancient nature-infused beasts. Hunt these fearsome creatures solo or take them on with up to two other players. Collect materials to build more armor and weapons as you stalk your prey across a fantasy medieval Japan filled with beauty and danger.',
      price: 39.99,
      inventory: 10,
      imageUrl: '/images/Wild Hearts.jpg',
      genre: 'RPG'
    }),
    Product.create({
      name: 'God of War Ragnarok',
      description: 'Embark on a mythic journey for answers and allies before Ragnarök arrives in God of War Ragnarok on PS5. Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go.',
      price: 44.99,
      inventory: 10,
      imageUrl: '/images/God of War.jpg',
      genre: 'Action'
    }),
    Product.create({
      name: 'The Legend of Zelda: Tears of the Kingdom',
      description: 'An epic adventure across the land and skies of Hyrule awaits in The Legend of Zelda™: Tears of the Kingdom for Nintendo Switch. The adventure is yours to create in a world fueled by your imagination. In this sequel to The Legend of Zelda: Breath of the Wild, youll decide your own path through the sprawling landscapes of Hyrule and the mysterious islands floating in the vast skies above. Can you harness the power of Link’s new abilities to fight back against the malevolent forces that threaten the kingdom?',
      price: 69.99,
      inventory: 10,
      imageUrl: '/images/The Legend of Zelda.jpg',
      genre: 'Action'
    }),
    Product.create({
      name: 'Street Fighter 6',
      description: "Powered by Capcoms proprietary RE ENGINE, Street Fighter 6 spans three distinct game modes, including Fighting Ground, World Tour and Battle Hub. The experience also includes innovative new gameplay features, plus enhanced visuals for every aspect of the game.",
      price: 54.99,
      inventory: 10,
      imageUrl: '/images/Street Fighter 6.jpg',
      genre: 'Fighting'
    }),
    Product.create({
      name: 'Mortal Kombat 1 Premium Edition',
      description: "Discover a reborn Mortal Kombat Universe created by the Fire God Liu Kang. Mortal Kombat 1 ushers in a new era of the iconic franchise with a new fighting system, game modes, and fatalities!",
      price: 109.99,
      inventory: 10,
      imageUrl: '/images/Mortal Kombat 1.jpg',
      genre: 'Fighting'
    }),
    Product.create({
      name: 'Madden NFL 24',
      description: 'Exemplify greatness in Madden NFL 24! Lead your team to a Super Bowl victory in Franchise, build a powerhouse Madden Ultimate Team™, take over The Yard, be the star in Face of the Franchise, and unleash your X-Factors in SSKO.',
      price: 69.99,
      inventory: 10,
      imageUrl: '/images/Madden NFL 24.jpg',
      genre: 'Sports'
    }),
    Product.create({
      name: 'WWE 2K23 Deluxe Edition',
      description: 'WWE 2K23 is the latest installment in the long-running series of professional wrestling games developed by 2K Games. the newest game in the series is set to feature an extensive roster of wrestlers and a wide variety of match types and game modes. The WWE 2K23 Roster will include a huge list of superstars from Raw, SmackDown, NXT, and NXT UK, and even WWE Legends!',
      price: 99.99,
      inventory: 10,
      imageUrl: '/images/WWE 2K23.jpg',
      genre: 'Sports'
    }),
    Product.create({
      name: 'Uncharted: Legacy of Thieves Collection',
      description: 'UNCHARTED TM 4: A Thief’s End : -A globe-trotting adventure with the largest and most detailed environments in the UNCHARTED franchise',
      price: 99.99,
      inventory: 10,
      imageUrl: '/images/uncharted.jpg',
      genre: 'Action'
    }),
    Product.create({
      name: 'Spider-Man: Miles Morales',
      description: 'Miles moral discovers explosive powers that set him apart from his mentor, Peter Parker. A war for power, a war for control of Marvel’s new York has broken out between a devious Energy Corporation and a high-tech criminal army',
      price: 99.99,
      inventory: 10,
      imageUrl: '/images/spiderman.jpg',
      genre: 'Fighting'
    }),
    Product.create({
      name: 'Sackboy : A Big Adventure',
      description: 'Tempest 3D audio Tech - hear craft world come life all around you Haptic feedback - running across wool like flooring or platforms will use Haptics to simulate the change in material under sackboy',
      price: 99.99,
      inventory: 10,
      imageUrl: '/images/sackboy.jpg',
      genre: 'RPG'
    }),
  ])

  const cartItems = await Promise.all([
    CartItem.create({
      userId: 2,
      productId: 1,
      quantity: 3
    }),
    CartItem.create({
      userId: 2,
      productId: 2,
      quantity: 3
    }),
    CartItem.create({
      userId: 2,
      productId: 3,
      quantity: 3
    }),
    CartItem.create({
      userId: 2,
      productId: 4,
      quantity: 3
    }),
    CartItem.create({
      userId: 3,
      productId: 5,
      quantity: 3
    }),
    CartItem.create({
      userId: 3,
      productId: 6,
      quantity: 3
    }),
    CartItem.create({
      userId: 3,
      productId: 7,
      quantity: 3
    }),
    CartItem.create({
      userId: 3,
      productId: 8,
      quantity: 3
    }),
  ])

  const orders = await Promise.all([
    Order.create({
      userId: 2,
      status: 'completed',
    }),
    Order.create({
      userId: 2,
      status: 'pending',
    }),
    Order.create({
      userId: 3,
      status: 'completed',
    }),
    Order.create({
      userId: 3,
      status: 'pending',
    }),
  ])

  const orderItems = await Promise.all([
    OrderItem.create({
      orderId: 1,
      productId: 1,
      quantity: 1,
      price: products[0].price
    }),
    OrderItem.create({
      orderId: 1,
      productId: 2,
      quantity: 1,
      price: products[1].price
    }),
    OrderItem.create({
      orderId: 2,
      productId: 3,
      quantity: 1,
      price: products[2].price
    }),
    OrderItem.create({
      orderId: 2,
      productId: 4,
      quantity: 1,
      price: products[3].price
    }),
    OrderItem.create({
      orderId: 3,
      productId: 5,
      quantity: 1,
      price: products[4].price
    }),
    OrderItem.create({
      orderId: 3,
      productId: 6,
      quantity: 1,
      price: products[5].price
    }),
    OrderItem.create({
      orderId: 4,
      productId: 7,
      quantity: 1,
      price: products[6].price
    }),
    OrderItem.create({
      orderId: 4,
      productId: 8,
      quantity: 1,
      price: products[7].price
    }),
  ])

  console.log(`seeded ${users.length} users`, `seeded ${products.length} products`, `seeded ${cartItems.length} cartItems`, `seeded ${orders.length} orders`, `seeded ${orderItems.length} orderItems`)
  console.log(`seeded successfully`)
  return {
    users: {
      user1: users[0],
      user2: users[1]
    }
  }
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('Closing DB Connection!')
    await db.close()
    console.log('DB Connection Closed!')
  }
}
if (module === require.main) {
  runSeed()
}
module.exports = seed
