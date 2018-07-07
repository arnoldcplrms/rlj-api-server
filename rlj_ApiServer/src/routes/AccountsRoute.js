module.exports = (app, mongoose, ROUTE) => {
    const AccountsController =
        require('../controllers/AccountsController')(mongoose)

    app.post(ROUTE.ACCOUNTS,
        AccountsController.AddAccount)
}