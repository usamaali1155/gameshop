const router = require("express").Router();
const { CartItem, Product } = require("../db");

router.get("/:userId", async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const cartItems = await CartItem.findAll({
      where: {
        userId: userId,
      },
      include: [Product],
    });
    res.json(cartItems);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
