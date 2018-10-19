const jwt = require('jsonwebtoken'),
    secretKey = "!@#$%^&*()"

module.exports = {
    async Sign(payload) {
        return await jwt.sign(payload, secretKey);
    },
    VerifyToken(req, res, next) {
        const bearerHeader = req.headers['authorization'];
        typeof bearerHeader !== 'undefined' ?
            tokenHandler(bearerHeader, res, next) :
            res.status(403).send("Invalid token");
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