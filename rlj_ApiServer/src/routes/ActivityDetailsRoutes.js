module.exports = (app, mongoose, ROUTE, errorHandler) => {
    const ActivityDetailsController =
        require('../controllers/ActivityDetailsController')(mongoose, errorHandler)

    app.put(ROUTE.ACTIVITY_DETAILS_SEEN,
        ActivityDetailsController.SetAsSeen);

    app.put(ROUTE.ACTIVITY_DETAILS_EXP,
        ActivityDetailsController.AddExplanation);

}