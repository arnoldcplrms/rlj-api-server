module.exports = (router, mongoose, ROUTE, errorHandler, verifyAuth) => {
    const ActivitiesController =
        require('../controllers/ActivitiesController')(mongoose, errorHandler)

    router
        .get(ROUTE.ACTIVITIES_BY_ID,
            verifyAuth,
            ActivitiesController.GetActivityLogsById)

        .post(ROUTE.ACTIVITIES,
            verifyAuth,
            ActivitiesController.LogActivity)

        .put(ROUTE.ACTIVITIES,
            verifyAuth,
            ActivitiesController.AddExplanation)

        .put(ROUTE.ACTIVITIES_SEEN,
            verifyAuth,
            ActivitiesController.SetAsSeen)

        .delete(ROUTE.ACTIVITIES,
            verifyAuth,
            ActivitiesController.DeleteActivity)

        .get(ROUTE.ACTIVITIES_COUNT,
            verifyAuth,
            ActivitiesController.GetMonitoredAccountsActivityCount)

}