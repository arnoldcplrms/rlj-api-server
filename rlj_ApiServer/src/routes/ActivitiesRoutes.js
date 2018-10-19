module.exports = (router, mongoose, ROUTE, errorHandler, { VerifyToken }) => {
    const ActivitiesController =
        require('../controllers/ActivitiesController')(mongoose, errorHandler)

    router
        .get(ROUTE.ACTIVITIES_BY_ID,
            VerifyToken,
            ActivitiesController.GetActivityLogsById)

        .post(ROUTE.ACTIVITIES,
            VerifyToken,
            ActivitiesController.LogActivity)

        .put(ROUTE.ACTIVITIES,
            VerifyToken,
            ActivitiesController.AddExplanation)

        .put(ROUTE.ACTIVITIES_SEEN,
            VerifyToken,
            ActivitiesController.SetAsSeen)

        .delete(ROUTE.ACTIVITIES,
            VerifyToken,
            ActivitiesController.DeleteActivity)

        .get(ROUTE.ACTIVITIES_COUNT,
            VerifyToken,
            ActivitiesController.GetMonitoredAccountsActivityCount)

}