module.exports = (router, mongoose, ROUTE, errorHandler) => {
    const AcctblRequestController =
        require('../controllers/AccountabilityRequestController')(mongoose, errorHandler)

    router.post(ROUTE.ACCTBLREQ,
        AcctblRequestController.NewAccountabilityRequest);

    router.get(ROUTE.ACCTBLREQ_BY_ID,
        AcctblRequestController.RetrieveRequest);

    router.delete(ROUTE.ACCTBLREQ_BY_ID,
        AcctblRequestController.DeleteRequest);
}