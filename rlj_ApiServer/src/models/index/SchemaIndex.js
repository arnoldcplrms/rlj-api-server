const mongoose = require('mongoose');
const CONFIG = require('../../config/config')
mongoose.connect(CONFIG.MONGO_URL);
const Schema = mongoose.Schema;