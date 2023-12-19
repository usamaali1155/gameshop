const router = require('express').Router()
const { models: { User } } = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'username']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})
router.post('/', async (req, res, next) => {
  try {
    console.log('Request Payload:', req.body);
    const newUser = await User.create(req.body);
    const { id, username } = newUser;

    res.status(201).json({ id, username });
  } catch (error) {
    next(error);
  }
});

router.delete('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    await user.destroy();
    res.send(user);
  } catch (error) {
    next(error);
  }
});

router.put('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    await user.update(req.body);
    const { id, username } = user;

    res.json({ id, username });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

