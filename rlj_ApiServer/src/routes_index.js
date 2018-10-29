const config = require('./config/config'),
    mongoose = require('mongoose'),
    ROUTE = require('./endpoints'),
    errorHandler = require('./helper/ErrorHandler'),
    db = mongoose.connection

mongoose.connect(config.MONGO_URL, {
    useNewUrlParser: true
});

db.once('open', () => {
    console.log("Connected to Server");
}).on('error', (err) => {
    console.log("CONNECTION FAILED!");
    console.log(err);
});

module.exports = router => {
    require('./routes/AccountsRoutes')(router);
    require('./routes/ActivitiesRoutes')(router);
    require('./routes/AccountabilitiesRoutes')(router);
    require('./routes/AccountabilityRequestRoutes')(router, mongoose, ROUTE, errorHandler);
}