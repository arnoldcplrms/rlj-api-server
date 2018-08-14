module.exports = (mongoose, errorHandler) => {
    const AccountsDAL =
        require('../data_access/AccountsDataAccess')(mongoose);

    return {
        async AddAccount(req, res) {
            try {
                await AccountsDAL.RegisterAccount(req);
                res.send({
                    message: `Inserted succesfully`
                });
            } catch (error) {
                errorHandler(error, res);
            }
        },
        async RetrieveAccount(req, res) {
            try {
                const result = await AccountsDAL.RetrieveAccount(req);
                res.send(result);
            } catch (error) {
                errorHandler(error, res);
            }
        }
    }
}