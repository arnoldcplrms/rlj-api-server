module.exports = (mongoose) => {
    const AccountabilitiesDAL = require('../data_access/AccountabilitiesDataAccess')(mongoose);

    const errorHandler = (error, res) => {
        console.log(error);
        res.status(500).json({
            err: error
        })
    }

    return {
        async AddAccountability(req, res) {
            try {
                await AccountabilitiesDAL.AddAccountability(req);
                res.send({
                    message: 'Accountabilities added.'
                })
            } catch (error) {
                errorHandler(error, res);
            }
        },
        async RemoveAccountabilty() {

        }
    }
}