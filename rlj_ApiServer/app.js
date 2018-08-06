const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const CONFIG = require('./src/config/config')

app.use(bodyParser.json());

require('./src/routes_index')(app);

app.listen(CONFIG.PORT, () => {
    console.log(`Listening to port ${CONFIG.PORT}`);
})