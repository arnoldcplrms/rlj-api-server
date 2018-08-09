module.exports = (app, mongoose, ROUTE, errorHandler) => {
    const ActivitiesController =
        require('../controllers/ActivitiesController')(mongoose, errorHandler)

    app.get(ROUTE.ACTIVITIES_BY_ID,
        ActivitiesController.GetActivityLogsById)

    app.post(ROUTE.ACTIVITIES,
        ActivitiesController.LogActivity);

    app.put(ROUTE.ACTIVITIES,
        ActivitiesController.AddExplanation);

    app.put(ROUTE.ACTIVITIES_SEEN,
        ActivitiesController.SetAsSeen)

    app.delete(ROUTE.ACTIVITIES,
        ActivitiesController.DeleteActivity);

}