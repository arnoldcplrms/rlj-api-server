const jwt = require('jsonwebtoken');
const secretKey = "!@#$%^&*()"

module.exports = {
    async Sign(payload) {
        return await jwt.sign(payload, secretKey);
    },
    async VerifyToken(req, res, next) {
        typeof bearerHeader !== 'undefined' ?
            tokeHandler(req.headers['authorization'], res, next) :
            res.status(403).send();
    },
    async VerifyAuth(token, res) {
        try {
            return jwt.verify(token, secretKey);
        } catch (error) {
            res.status(403).send();
        }
    }
}

let tokeHandler = (bearer, res, next) => {
    let bearerToken = bearer.split(' ');
    res.token = bearerToken[1]
    next();
}