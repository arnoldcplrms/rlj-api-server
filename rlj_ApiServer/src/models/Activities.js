const mongoose = require('mongoose')
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
        default: new Date().toLocaleString()
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
        Body: {
            type: String
        },
        TimeStamp: {
            type: Date,
            default: new Date().toLocaleString()
        }
    },
    Seen: {
        type: Boolean,
        required: true
    },
    SeenBy: {
        AccountId: {
            type: String,
        },
        TimeStamp: {
            type: Date,
            default: Date.now
        }
    }
}, {
    collection: 'Activities',
    versionKey: false
})

module.exports = mongoose.model('Activities', activitiesSchema);