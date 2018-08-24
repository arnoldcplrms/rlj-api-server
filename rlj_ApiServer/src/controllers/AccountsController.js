module.exports = (mongoose, errorHandler) => {
    const AccountsDAL = require('../data_access/AccountsDataAccess')(mongoose);
    const bcrypt = require('../helper/PasswordEncryption');
    return {
        async AddAccount(req, res) {
            try {
                let password = await bcrypt.HashPassword(req.body.Password);
                req.body.Password = password;
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
        },
        async Login(req, res) {
            try {
                await AccountsDAL.IsLoginAuthorized(req) ?
                    res.status(200).send("Welcome user.") :
                    res.status(400).send({
                        message: 'Invalid username or password.'
                    });
            } catch (error) {
                errorHandler(error, res);
            }
        }
    }
}