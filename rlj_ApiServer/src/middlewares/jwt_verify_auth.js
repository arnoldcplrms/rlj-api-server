const jwt = require('jsonwebtoken'),
    { JWT_SECRET } = require('../config/config'),
    errorHandler = require('../helper/ErrorHandler')

module.exports = (req, res, next) => {
    const token = req.header("x-auth-token")
    if (!token) return res.status(401).send("Access denied. No token provided")
    try {
        req.user = jwt.verify(token, JWT_SECRET);
        next();
    } catch (error) {
        res.status(401).send('Invalid token.');
        errorHandler(error, res);
    }
}