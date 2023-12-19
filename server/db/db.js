const Sequelize = require("sequelize");
const pkg = require("../../package.json");

const databaseName =
  pkg.name + (process.env.NODE_ENV === "test" ? "_test" : "");
const config = {
  logging: false,
};
if (process.env.LOGGING === "true") {
  delete config.logging;
}
if (process.env.DATABASE_URL) {
  config.dialectOptions = {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  };
}

const db = new Sequelize(
  process.env.DATABASE_URL ||
  `postgres://postgres:usama@localhost:5432/gameshop`,
  config
);

module.exports = db;