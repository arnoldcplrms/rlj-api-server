const config = require('./config/config'),
    mongoose = require('mongoose'),
    ROUTE = require('./endpoints'),
    errorHandler = require('./helper/ErrorHandler'),
    db = mongoose.connection;

const AccountsRoutes = require('./routes/AccountsRoutes'),
    ActivitiesRoutes = require('./routes/ActivitiesRoutes'),
    AcctblRequest = require('./routes/AccountabilityRequestRoutes'),
    AccountabilitiesRoutes = require('./routes/AccountabilitiesRoutes');

mongoose.connect(config.MONGO_URL, {
    useNewUrlParser: true
});

db.once('open', () => {
    console.log("Connected to Server");
});

db.on('error', (err) => {
    console.log("CONNECTION FAILED!");
    console.log(err);
});

module.exports = (router) => {
    AccountsRoutes(router, mongoose, ROUTE, errorHandler);
    ActivitiesRoutes(router, mongoose, ROUTE, errorHandler);
    AccountabilitiesRoutes(router, mongoose, ROUTE, errorHandler);
    AcctblRequest(router, mongoose, ROUTE, errorHandler);
}