const mongoose = require('mongoose');
const accountabilityRequest = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        AccountId: {
            type: String,
            required: true
        },
        RequestorId: {
            type: String,
            required: true
        }
    },
    {
        collection: 'AccountabilityRequest',
        versionKey: false
    }
)

module.exports = mongoose.model('AccountabilityRequest', accountabilityRequest);