const config = require('./config/config');
const mongoose = require('mongoose');
const ROUTE = require('./endpoints');
const db = mongoose.connection;

mongoose.connect(config.MONGO_URL, {
    useNewUrlParser: true
});

db.once('open', () => {
    console.log("Connected to Server");
});
db.on('error', (err) => {
    console.log(err);
});

module.exports = (app) => {
    require('./routes/AccountsRoutes')(app, mongoose, ROUTE);
    require('./routes/ActivitiesRoutes')(app, mongoose, ROUTE);
    require('./routes/AccountabilitiesRoutes')(app, mongoose, ROUTE);
}