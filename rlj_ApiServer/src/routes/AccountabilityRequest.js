module.exports = (app, mongoose, ROUTE, errorHandler) => {
    const AcctblRequestController =
        require('../controllers/AccountabilityRequestController')(mongoose, errorHandler)

    app.post(ROUTE.ACCTBLREQ,
        AcctblRequestController.NewAccountabilityRequest)

    app.get(ROUTE.ACCTBLREQ_BY_ID,
        AcctblRequestController.RetrieveRequest)

    app.delete(ROUTE.ACCTBLREQ_BY_ID,
        AcctblRequestController.DeleteRequest)
}