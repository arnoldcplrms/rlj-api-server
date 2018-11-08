module.exports = app => {
    app.use('/api/activities',
        require('./routes/ActivitiesRoutes'))

    .use('/api/accounts',
        require('./routes/AccountsRoutes'))

    .use('/api/accountabilities/request',
        require('./routes/AccountabilityRequestRoutes'))

    .use('/api/accountabilities',
        require('./routes/AccountabilitiesRoutes'))

    .use('/api/activity_details',
        require('./routes/ActivityDetailsRoutes'))
}