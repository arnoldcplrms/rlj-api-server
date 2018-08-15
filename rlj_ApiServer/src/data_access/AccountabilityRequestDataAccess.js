const AccountabilityRequest = require('../models/AccountabilityRequest');
const Accounts = require('../models/Accounts');
const timeStamp = require('../helper/timestamp');
module.exports = (mongoose) => {

    return {
        async NewAccountabilityRequest(req) {
            const data = req.body;
            const acctblRequest = new AccountabilityRequest({
                _id: new mongoose.Types.ObjectId(),
                AccountId: data.AccountId,
                RequestorId: data.RequestorId,
                RequestDate: timeStamp()
            });
            await acctblRequest.save();
        },

        async FindExistingRequest(req) {
            const data = req.body;
            const result = await AccountabilityRequest.find(
                {
                    AccountId: data.AccountId,
                    RequestorId: data.RequestorId
                }
            ).exec();

            return result;
        },
        async RetrieveRequest(req) {
            const result = [];
            const request = await AccountabilityRequest.find({
                AccountId: req.params.id
            }).exec();

            for (let i = 0, len = request.length; i < len; i++) {
                const accRes = await Accounts.findOne({
                    _id: mongoose.Types.ObjectId(request[i].RequestorId)
                }).exec();
                result.push({
                    Object_Id: request[i]._id,
                    FullName: `${accRes.FirstName} ${accRes.LastName}`,
                    Email: accRes.Email,
                    ProfileImage: accRes.ProfileImage,
                    AccountId: accRes._id,
                    RequestDate: request[i].RequestDate
                });
            }
            return result;
        },
        async DeleteRequest(req) {
            await AccountabilityRequest.deleteOne({
                "_id": mongoose.Types.ObjectId(req.params.id)
            }).exec();
        }
    }
}