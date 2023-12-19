const { models: { User } } = require('../db');

const requireToken = async (req, res, next) => {
    console.log("THIS IS A TOKEN")
	try {
		const token = req.headers.authorization
		const user = await User.findByToken(token)
        req.user = user
		next()
	} catch (error) {
		next(error)
	}
}

const isAdmin = (req, res, next) => {
    console.log("THIS IS A ADMIN")
    if (req.user.isAdmin) {
        next()
    } else {
        res.status(403).json({ error: 'Access denied' });
    }
}

module.exports = {
    requireToken,
    isAdmin
}