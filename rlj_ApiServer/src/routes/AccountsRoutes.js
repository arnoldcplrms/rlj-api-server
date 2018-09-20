module.exports = (router, mongoose, ROUTE, errorHandler, jwt) => {
    const AccountsController =
        require('../controllers/AccountsController')(mongoose, errorHandler, jwt)

    router
        .post(ROUTE.ACCOUNTS,
            AccountsController.AddAccount)

        .post(ROUTE.LOGIN,
            AccountsController.Login)

        .get(ROUTE.ACCOUNTS_BY_ID,
            AccountsController.RetrieveAccount)

}