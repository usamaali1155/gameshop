const router = require('express').Router()
const Product = require('../db/models/Product')


router.get('/',async (req, res, next)=> {
    
    const products = await Product.findAll();
    res.send(products)
});



module.exports = router


