const AcctblRequestController = require('../controllers/AccountabilityRequestController'),
    { ACCTBLREQ, ACCTBLREQ_BY_ID } = require('../endpoints')

module.exports = router => {
    router
        .post(ACCTBLREQ,
            AcctblRequestController.NewAccountabilityRequest)

        .get(ACCTBLREQ_BY_ID,
            AcctblRequestController.RetrieveRequest)

        .delete(ACCTBLREQ_BY_ID,
            AcctblRequestController.DeleteRequest)
}