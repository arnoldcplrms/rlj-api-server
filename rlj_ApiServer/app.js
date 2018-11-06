const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    { PORT } = require('./src/config/config'),
    cors = require('cors'),
    router = express.Router(),
    // PAMUL = require('./src/helper/ProcessAndMemoryUsageLogger');
    { MONGO_URL } = require('./src/config/config'),
    mongoose = require('mongoose'),
    db = mongoose.connection

app.use([
    cors(),
    bodyParser.json(),
    router
]).listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true
});

db.once('open', () => {
    console.log("Connected to Server");
}).on('error', (err) => {
    console.log("CONNECTION FAILED!");
    console.log(err);
});

require('./src/routes_index')(app);