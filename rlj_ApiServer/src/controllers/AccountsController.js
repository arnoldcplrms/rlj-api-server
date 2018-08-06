const Account = require('../models/Accounts');

module.exports = (mongoose) => {
    const AccountabilitiesDAL = require('../data_access/AccountabilitiesDataAccess')(mongoose);
    const AccountsDAL = require('../data_access/AccountsDataAccess')(mongoose);

    const errorHandler = (error, res) => {
        console.log(error);
        res.status(500).json({
            err: error
        })
    }

    return {
        async AddAccount(req, res) {
            try {
                const account = await AccountsDAL.RegisterAccount(req);
                await AccountabilitiesDAL.SetAccountabilityCollection(account._id)
                res.send({
                    message: `Inserted succesfully`
                })
            } catch (error) {
                errorHandler(error, res)
            }
        }
    }
}