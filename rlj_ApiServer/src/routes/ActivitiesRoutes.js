module.exports = (router, mongoose, ROUTE, errorHandler, { VerifyAuth }) => {
    const ActivitiesController =
        require('../controllers/ActivitiesController')(mongoose, errorHandler)

    router
        .get(ROUTE.ACTIVITIES_BY_ID,
            VerifyAuth,
            ActivitiesController.GetActivityLogsById)

        .post(ROUTE.ACTIVITIES,
            VerifyAuth,
            ActivitiesController.LogActivity)

        .put(ROUTE.ACTIVITIES,
            VerifyAuth,
            ActivitiesController.AddExplanation)

        .put(ROUTE.ACTIVITIES_SEEN,
            VerifyAuth,
            ActivitiesController.SetAsSeen)

        .delete(ROUTE.ACTIVITIES,
            VerifyAuth,
            ActivitiesController.DeleteActivity)

        .get(ROUTE.ACTIVITIES_COUNT,
            VerifyAuth,
            ActivitiesController.GetMonitoredAccountsActivityCount)

}