const mongoose = require('mongoose');
const timeStamp = require('../helper/timestamp')
const activitiesSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    AccountId: {
        type: String,
        required: true
    },
    Activity: {
        type: String,
        required: true
    },
    TimeStamp: {
        type: String,
        default: timeStamp()
    },
    IsMobile: {
        type: Boolean,
        required: true
    },
    MacAddress: {
        type: String,
        required: true
    },
    Explanation: {
        Body: String,
        TimeStamp: String
    },
    Seen: {
        type: Boolean,
        required: true
    },
    SeenBy: {
        AccountId: String,
        TimeStamp: String,
        FirstName: String
    }
}, {
    collection: 'Activities',
    versionKey: false
})

module.exports = mongoose.model('Activities', activitiesSchema);