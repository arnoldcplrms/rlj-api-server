/**
 * Mongoose is a singleton, which means you can access the connection no matter how many times you create a variable
 */
const mongoose = require('mongoose')
const AccountabilitiesDAL = require('../data_access/AccountabilitiesDataAccess')(mongoose);

module.exports = errorHandler => ({
    AddAccountability: async (req, res) => {
        await AccountabilitiesDAL.AddAccountability(req).catch(err => errHandler(err, res);
        res.send({ message: 'Accountabilities added.' })
    },
    // ETC
})
