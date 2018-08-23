const Account = require('../models/Accounts');
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
        }
    }
}