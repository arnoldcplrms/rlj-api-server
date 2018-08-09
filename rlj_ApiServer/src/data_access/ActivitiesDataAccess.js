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
                TimeStamp: timeStamp(),
                Seen: {
                    HasSeen: false,
                    By: "",
                    TimeStamp: ""
                }
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
            await Activities.update(
                { "_id": new mongoose.Types.ObjectId(req.body.id) },
                {
                    $push: {
                        Explanation: body
                    }
                }
            ).exec();
        },

        async SetAsSeen(req) {
            const body = req.body;
            await Activities.update(
                { "_id": new mongoose.Types.ObjectId(body.id) },
                {
                    $set: {
                        Seen: {
                            HasSeen: true,
                            By: body.AccountId,
                            TimeStamp: timeStamp()
                        }
                    }
                }
            ).exec();
        }
    }
}