module.exports = (app, mongoose, ROUTE) => {
    const AccountabilitiesController =
        require('../controllers/AccountabilitiesController')(mongoose)

    app.put(ROUTE.ACCOUNTABILITIES,
        AccountabilitiesController.AddAccountability)
}