const { isEmailExist, isUserNameExists } = require('../models/Accounts');
const Joi = require("joi");
const errorHandler = require('../helper/ErrorHandler')

module.exports = async (req, res, next) => {
    try {
        const accountSchema = Joi.object().keys({
            FirstName: Joi.string().required(),
            LastName: Joi.string().required(),
            MiddleName: Joi.string(),
            UserName: Joi.string().alphanum().min(3).max(30).required(),
            Password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
            BirthDate: Joi.string().required(),
            Email: Joi.string().email().required(),
            ContactNumber: Joi.number().min(7).required(),
            Address: {
                Country: Joi.string().required(),
                Street: Joi.string().required(),
                Town: Joi.string().required(),
                City: Joi.string().required()
            }
        });
        const result = Joi.validate(req.body, accountSchema),
            doesEmailExist = await isEmailExist(req, res),
            doesUserNameExist = await isUserNameExists(req, res)

        if (!result.error && !doesEmailExist && !doesUserNameExist) {
            next()
        } else {
            res.status(400).send({
                error: result.error ? result : null,
                doesEmailExist,
                doesUserNameExist
            });
        }
    } catch (error) {
        errorHandler(error, res)
    }
}