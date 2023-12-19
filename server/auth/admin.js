const router = require('express').Router();
const { isAdmin, requireToken } = require('./gatekeeper');
const { Product } = require('../db');
const { User } = require('../db');

router.use('/', requireToken, isAdmin);

router.get('/users', requireToken, isAdmin, async (req, res, next) => {
    try {
        let users = await User.findAll();
        res.send(users);
    } catch (error) {
        next(error);
    }
})

router.post('/add', requireToken, isAdmin, async (req, res, next) => {
    try {
        let { data } = req.body;
        let product = await Product.create(data);
        res.send(product);
    } catch (error) {
        next(error);
    }
})

router.put('/edit/product/:id', requireToken, isAdmin, async (req, res, next) => {
    try {
        let { data } = req.body;
        let product = await Product.findByPk(req.params.id);
        await product.update(data);
        res.send(product);
    } catch (error) {
        next(error);
    }
})

router.put('/edit/user/:id', requireToken, isAdmin, async (req, res, next) => {
    try {
        let { data } = req.body;
        let user = await User.findByPk(req.params.id);
        await user.update(data);
        res.send(user);
    } catch (error) {
        next(error);
    }
})

router.delete('/delete/product/:id', requireToken, isAdmin, async (req, res, next) => {
    try {
        let product = await Product.findByPk(req.params.id);
        await product.destroy();
        res.send(product);
    } catch (error) {
        next(error);
    }
})

router.delete('/delete/user/:id', requireToken, isAdmin, async (req, res, next) => {
    try {
        let user = await User.findByPk(req.params.id);
        await user.destroy();
        res.send(user);
    } catch (error) {
        next(error);
    }
})

module.exports = router;