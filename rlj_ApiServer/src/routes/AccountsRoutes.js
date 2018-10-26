const verifyAuth = require('../middlewares/jwt_verify_auth'),
    accountsValidation = require('../middlewares/AccountsValidation')

module.exports = (router, mongoose, ROUTE, errorHandler) => {
    const accountsController =
        require('../controllers/AccountsController')(mongoose, errorHandler)

    router
        .post(ROUTE.ACCOUNTS,
            accountsValidation,
            accountsController.AddAccount)

        .post(ROUTE.LOGIN,
            accountsController.Login)

        .get(ROUTE.ACCOUNTS_BY_ID,
            verifyAuth,
            accountsController.RetrieveAccount)

}