module.exports = (mongoose, errorHandler) => {
    const AccountsDAL =
        require('../data_access/AccountsDataAccess')(mongoose);

    return {
        async AddAccount(req, res) {
            try {
                await AccountsDAL.RegisterAccount(req);
                res.send({
                    message: `Inserted succesfully`
                })
            } catch (error) {
                errorHandler(error, res);
            }
        }
    }
}