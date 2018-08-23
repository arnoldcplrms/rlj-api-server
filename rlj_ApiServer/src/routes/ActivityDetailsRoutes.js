module.exports = (router, mongoose, ROUTE, errorHandler) => {
    const ActivityDetailsController =
        require('../controllers/ActivityDetailsController')(mongoose, errorHandler)

    router.put(ROUTE.ACTIVITY_DETAILS_SEEN,
        ActivityDetailsController.SetAsSeen);

    router.put(ROUTE.ACTIVITY_DETAILS_EXP,
        ActivityDetailsController.AddExplanation);

}