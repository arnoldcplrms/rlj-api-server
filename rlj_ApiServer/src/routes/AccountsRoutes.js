const verifyAuth = require('../middlewares/jwt_verify_auth'),
    accountsValidation = require('../middlewares/AccountsValidation'),
    { ACCOUNTS, LOGIN, ACCOUNTS_BY_ID } = require('../endpoints'),
    accountsController = require('../controllers/AccountsController')

module.exports = router => {

    router
        .post(ACCOUNTS,
            accountsValidation,
            accountsController.AddAccount)

    .post(LOGIN,
        accountsController.Login)

    .get(ACCOUNTS_BY_ID,
        verifyAuth,
        accountsController.RetrieveAccount)
}