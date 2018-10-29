const AccountabilitiesController = require('../controllers/AccountabilitiesController'),
    { ACCOUNTABILITIES } = require('../endpoints')

module.exports = router => {
    router.put(ACCOUNTABILITIES,
        AccountabilitiesController.AddAccountability)
}