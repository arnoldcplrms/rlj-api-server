const { MONGO_URL } = require('./config/config'),
    mongoose = require('mongoose'),
    db = mongoose.connection

mongoose.connect(MONGO_URL, {
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
    require('./routes/AccountabilityRequestRoutes')(router);
}