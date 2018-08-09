module.exports = (mongoose, errorHandler) => {
    const AccountabilitiesDAL = require('../data_access/AccountabilitiesDataAccess')(mongoose);

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