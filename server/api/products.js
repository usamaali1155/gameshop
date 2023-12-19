const router = require('express').Router()
const Product = require('../db/models/Product')


router.get('/',async (req, res, next)=> {
    
    const products = await Product.findAll();
    res.send(products)
});

router.get("/:id", async (req, res)=> {
    const id = req.params.id;
    const singleProduct = await Product.findByPk(id);
    if(!singleProduct) return res.status(404).send("not found")
    res.send(singleProduct)
    
});

module.exports = router


