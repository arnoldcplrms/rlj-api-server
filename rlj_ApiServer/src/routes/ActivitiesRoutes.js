module.exports = (router, mongoose, ROUTE, errorHandler) => {
    const ActivitiesController =
        require('../controllers/ActivitiesController')(mongoose, errorHandler)

    router.get(ROUTE.ACTIVITIES_BY_ID,
        ActivitiesController.GetActivityLogsById);

    router.post(ROUTE.ACTIVITIES,
        ActivitiesController.LogActivity);

    router.put(ROUTE.ACTIVITIES,
        ActivitiesController.AddExplanation);

    router.put(ROUTE.ACTIVITIES_SEEN,
        ActivitiesController.SetAsSeen);

    router.delete(ROUTE.ACTIVITIES,
        ActivitiesController.DeleteActivity);

    router.get(ROUTE.ACTIVITIES_COUNT,
        ActivitiesController.GetMonitoredAccountsActivityCount)

}