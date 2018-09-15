const Accounts = require('../models/Accounts')

let IsUserNameExists = async (req, res) => {
    let result = true;
    const accounts = await Accounts.findOne({
        UserName: req.body.UserName
    }).exec();
    accounts ?
        Message(res, 'Username already exists') :
        result = false;

    return result
}

let IsEmailExist = async (req, res) => {
    let result = true;
    const accounts = await Accounts.findOne({
        Email: req.body.Email
    }).exec();

    accounts ?
        Message(res, 'Email already exists') :
        result = false;

    return result
}

let Message = (res, message) => {
    res.status(400).send({
        message
    })
}

module.exports = {
    async ValidateExistingCredentials(req, res, next) {
        if (await !IsEmailExist(req, res) && await !IsUserNameExists(req, res)) {
            next();
        }
    }
}