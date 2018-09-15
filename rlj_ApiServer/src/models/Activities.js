const mongoose = require('mongoose');
const activitiesSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        AccountId: {
            type: mongoose.Schema.Types.ObjectId,
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
                type: String,
                default: ""
            },
            TimeStamp: {
                type: String,
                default: ""
            }
        },
        Explanation: {
            type: Array,
            default: []
        }
    },
    {
        collection: 'Activities',
        versionKey: false
    }
)

module.exports = mongoose.model('Activities', activitiesSchema);