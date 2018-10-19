const Account = require('../models/Accounts');
const { ComparePassword } = require('../helper/PasswordEncryption');
module.exports = (mongoose) => {
    return {
        async RegisterAccount(req) {
            const body = req.body;
            await new Account({
                _id: new mongoose.Types.ObjectId(),
                FirstName: body.FirstName,
                LastName: body.LastName,
                MiddleName: body.MiddleName,
                UserName: body.UserName,
                Password: body.Password,
                BirthDate: new Date(body.BirthDate).toDateString(),
                Email: body.Email,
                ProfileImage: body.ProfileImage,
                ContactNumber: body.ContactNumber,
                Address: {
                    Country: body.Address.Country,
                    Street: body.Address.Street,
                    Town: body.Address.Town,
                    City: body.Address.City
                }
            }).save();
        },
        async RetrieveAccount(req) {
            return await Account.findOne({
                "_id": mongoose.Types.ObjectId(req.params.id)
            }).exec();
        },
        async IsLoginAuthorized(req) {
            let res;
            let dataObject = {};
            let data = req.body;
            const account = await Account.findOne({
                UserName: data.UserName
            }).exec();

            (account &&
                await ComparePassword(data.Password, account.Password)) ?
                res = true : res = false;

            res ? dataObject = {
                isAuthorized: res,
                _id: account._id,
                userName: account.UserName,
                email: account.Email
            } : dataObject = {
                isAuthorized: res
            }

            return dataObject;
        },
        async IsUsernameExisting(req) {
            let res;
            const account = await Account.findOne({
                UserName: req.body.UserName
            }).exec();

            account ? res = true : res = false;
            return res
        }
    }
}