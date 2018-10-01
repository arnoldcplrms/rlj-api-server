const jwt = require('jsonwebtoken'),
    secretKey = "!@#$%^&*()"

module.exports = {
    async Sign(payload) {
        return await jwt.sign(payload, secretKey);
    },
    VerifyToken(req, res, next) {
        typeof bearerHeader !== 'undefined' ?
            tokenHandler(req.headers['authorization'], res, next) :
            res.status(403).send();
    },
    VerifyAuth(token, res) {
        try {
            return jwt.verify(token, secretKey);
        } catch (error) {
            res.status(403).send();
            console.log(error);
        }
    }
}

let tokenHandler = (bearer, res, next) => {
    let bearerToken = bearer.split(' ');
    res.token = bearerToken[1]
    next();
}