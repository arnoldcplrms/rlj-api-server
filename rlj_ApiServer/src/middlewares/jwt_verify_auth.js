const jwt = require('jsonwebtoken'),
    { JWT_SECRET } = require('../config/config')

module.exports = (req, res, next) => {
    const token = req.header("x-auth-token")
    if (!token) return res.status(401).send("Access denied. No token provided")
    try {
        req.user = jwt.verify(token, JWT_SECRET);
        next();
    } catch (error) {
        res.status(400).send('Invalid token.');
        console.log(error);
    }
}