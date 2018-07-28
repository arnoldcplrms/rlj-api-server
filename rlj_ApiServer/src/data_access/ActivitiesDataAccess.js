const Activities = require('../models/Activities');
const timeStamp = require('../helper/timestamp');
module.exports = (mongoose) => {
    return {
        async GetActivityLogsById(req) {
            const result = await Activities.find({
                "AccountId": req.params.id
            }).exec();

            return result;
        },

        async LogActivity(req) {
            const body = req.body;
            const activity = new Activities({
                _id: new mongoose.Types.ObjectId(),
                AccountId: body.AccountId,
                Activity: body.Activity,
                IsMobile: body.IsMobile,
                MacAddress: body.MacAddress,
                Seen: false
            });

            await activity.save();
        },

        async DeleteActivity(req) {
            await Activities.deleteOne({
                "_id": new mongoose.Types.ObjectId(req.body.id)
            }).exec();
        },

        async AddExplanation(req) {
            const body = req.body;
            await Activities.update({
                "_id": new mongoose.Types.ObjectId(req.body.id)
            }, {
                $set: {
                    Explanation: {
                        Body: body.Explanation,
                        TimeStamp: timeStamp(),
                    }
                }
            }).exec();
        },

        async SetAsSeen(req) {
            const body = req.body;
            await Activities.update({
                "_id": new mongoose.Types.ObjectId(body.id)
            }, {
                $set: {
                    Seen: true,
                    SeenBy: {
                        AccountId: body.AccountId,
                        TimeStamp: timeStamp(),
                        FirstName: body.FirstName
                    }
                }
            }).exec();
        }
    }
}