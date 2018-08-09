const Accountabilities = require('../models/Accountabilities');
module.exports = (mongoose) => {
    return {
        async SetAccountabilityCollection(id) {
            const accountabilities = new Accountabilities({
                _id: new mongoose.Types.ObjectId(),
                AccountId: id,
                MonitoredAccounts: []
            })
            await accountabilities.save();
        },
        async AddAccountability(req) {
            const data = req.body;
            await Accountabilites.update(
                { "_id": new mongoose.Types.ObjectId(data.id) },
                {
                    $push: {
                        MonitoredAccounts: data.Id
                    }
                }
            ).exec();
        }
    }
}