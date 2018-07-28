module.exports = (app, mongoose, ROUTE) => {
    const ActivitiesController =
        require('../controllers/ActivitiesController')(mongoose)

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