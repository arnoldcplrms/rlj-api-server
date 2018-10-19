const loginHandler = async (data, res, jwt) => {
    let token = await jwt.Sign({
        _id: data._id,
        userName: data.userName,
        email: data.email
    });
    res.status(200).send({
        token
    });
}
module.exports = (mongoose, errorHandler, jwt) => {
    const AccountsDAL = require('../data_access/AccountsDataAccess')(mongoose);
    const { HashPassword } = require('../helper/PasswordEncryption');
    return {
        async AddAccount(req, res) {
            try {
                let password = await HashPassword(req.body.Password);
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
                const login = await AccountsDAL.IsLoginAuthorized(req)
                login.isAuthorized ?
                    await loginHandler(login, res, jwt) :
                    res.status(400).send({
                        message: 'Invalid username or password.'
                    });
            } catch (error) {
                errorHandler(error, res);
            }
        }
    }
}
