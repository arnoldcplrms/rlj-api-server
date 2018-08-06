module.exports = (app, mongoose, ROUTE) => {
    const ActivityDetailsController =
        require('../controllers/ActivityDetailsController')(mongoose)

    app.put(ROUTE.ACTIVITY_DETAILS_SEEN,
        ActivityDetailsController.SetAsSeen);

    app.put(ROUTE.ACTIVITY_DETAILS_EXP,
        ActivityDetailsController.AddExplanation);

}