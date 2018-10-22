const jwt = require('jsonwebtoken'),
    secretKey = "!@#$%^&*()"

module.exports = {
    async Sign(payload) {
        return await jwt.sign(payload, secretKey);
    },
    // VerifyToken(req, res, next) {
    //     const bearerHeader = req.headers['x-auth-token'];
    //     typeof bearerHeader !== 'undefined' ?
    //         tokenHandler(bearerHeader, req, next) :
    //         res.status(403).send("Invalid token");
    // },
    VerifyAuth(req, res, next) {
        const token = req.header("x-auth-token")
        if (!token) return res.status(401).send("Access denied. No token provided")
        try {
            jwt.verify(token, secretKey);
            next();
        } catch (error) {
            res.status(400).send('Invalid token.');
            console.log(error);
        }
    }
}

// let tokenHandler = (bearer, req, next) => {
//     let bearerToken = bearer.split(' ');
//     req.token = bearerToken[1]
//     next();
// }