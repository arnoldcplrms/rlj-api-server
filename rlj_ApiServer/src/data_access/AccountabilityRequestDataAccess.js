const AccountabilityRequest = require('../models/AccountabilityRequest');
const Accounts = require('../models/Accounts');
module.exports = (mongoose) => {

    return {
        async NewAccountabilityRequest(req) {
            const data = req.body;
            const acctblRequest = new AccountabilityRequest({
                _id: new mongoose.Types.ObjectId(),
                AccountId: data.AccountId,
                RequestorId: data.RequestorId
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
                    FullName: `${accRes.FirstName} ${accRes.LastName}`,
                    Email: accRes.Email,
                    ProfileImage: accRes.ProfileImage,
                    AccountId: accRes._id
                });
            }
            return result;
        }
    }
}