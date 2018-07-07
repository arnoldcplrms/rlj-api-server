module.exports = (app, mongoose, ROUTE) => {
    const ActivitiesController =
        require('../controllers/ActivitiesController')(mongoose)

    app.post(ROUTE.ACTIVITIES_BY_ID,
        ActivitiesController.GetActivityLogById)

    app.post(ROUTE.ACTIVITIES,
        ActivitiesController.LogActivity);

    app.put(ROUTE.ACTIVITIES,
        ActivitiesController.AddExplanation);

    app.put(ROUTE.ACTIVITIES_SEEN,
        ActivitiesController.SetAsSeen)

    app.delete(ROUTE.ACTIVITIES,
        ActivitiesController.DeleteActivity);

}