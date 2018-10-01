module.exports = (router, mongoose, ROUTE, errorHandler) => {
    const ActivitiesController =
        require('../controllers/ActivitiesController')(mongoose, errorHandler)

    router
        .get(ROUTE.ACTIVITIES_BY_ID,
            ActivitiesController.GetActivityLogsById)

        .post(ROUTE.ACTIVITIES,
            ActivitiesController.LogActivity)

        .put(ROUTE.ACTIVITIES,
            ActivitiesController.AddExplanation)

        .put(ROUTE.ACTIVITIES_SEEN,
            ActivitiesController.SetAsSeen)

        .delete(ROUTE.ACTIVITIES,
            ActivitiesController.DeleteActivity)

        .get(ROUTE.ACTIVITIES_COUNT,
            ActivitiesController.GetMonitoredAccountsActivityCount)

}