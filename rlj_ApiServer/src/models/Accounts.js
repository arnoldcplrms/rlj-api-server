const mongoose = require('mongoose')
const accountSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    MiddleName: {
        type: String,
        required: true
    },
    UserName: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    BirthDate: {
        type: Date,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    ProfileImage: {
        type: String,
        required: true
    },
    Address: {
        Country: {
            type: String,
            required: true
        },
        Street: {
            type: String,
            required: true
        },
        Town: {
            type: String,
            required: true
        },
        City: {
            type: String,
            required: true
        }
    }
}, {
    collection: 'Accounts',
    versionKey: false
})

module.exports = mongoose.model('Accounts', accountSchema);