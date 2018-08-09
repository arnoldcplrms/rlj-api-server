const mongoose = require('mongoose');
const activitiesSchema = new mongoose.Schema(
    {
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
        },
        IsMobile: {
            type: Boolean,
            required: true
        },
        MacAddress: {
            type: String,
            required: true
        },
        Seen: {
            HasSeen: {
                type: Boolean,
                default: false
            },
            By: {
                type: String
            },
            TimeStamp: {
                type: String
            }
        },
        Explanation: {
            type: Array
        }
    },
    {
        collection: 'Activities',
        versionKey: false
    }
)

module.exports = mongoose.model('Activities', activitiesSchema);