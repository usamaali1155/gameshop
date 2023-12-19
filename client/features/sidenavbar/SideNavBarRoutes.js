const express = require("express");
const router = express.Router();
const { Product } = require("../../../server/db/models");

router.get("/genre/rpg", async (req, res, next) => {
  try {
    const products = await Product.findAll({
      where: {
        genre: "RPG",
      },
    });
    res.send(products);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
