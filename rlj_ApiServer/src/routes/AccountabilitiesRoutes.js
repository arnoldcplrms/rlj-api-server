module.exports = (router, mongoose, ROUTE, errorHandler) => {
    const AccountabilitiesController =
        require('../controllers/AccountabilitiesController')(mongoose, errorHandler)

    router.put(ROUTE.ACCOUNTABILITIES,
        AccountabilitiesController.AddAccountability)
}