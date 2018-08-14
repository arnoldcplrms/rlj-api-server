module.exports = (app, mongoose, ROUTE, errorHandler) => {
    const AccountsController =
        require('../controllers/AccountsController')(mongoose, errorHandler)

    app.post(ROUTE.ACCOUNTS,
        AccountsController.AddAccount)

    app.get(ROUTE.ACCOUNTS_BY_ID,
        AccountsController.RetrieveAccount)
}