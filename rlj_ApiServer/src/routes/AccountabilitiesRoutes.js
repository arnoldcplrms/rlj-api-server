module.exports = (app, mongoose, ROUTE, errorHandler) => {
    const AccountabilitiesController =
        require('../controllers/AccountabilitiesController')(mongoose, errorHandler)

    app.put(ROUTE.ACCOUNTABILITIES,
        AccountabilitiesController.AddAccountability)
}