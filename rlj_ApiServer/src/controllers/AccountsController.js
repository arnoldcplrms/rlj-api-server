const Account = require('../models/Accounts');
module.exports = (mongoose) => {
    const Accountabilities = require('../models/Accountabilities');

    const errorHandler = (error, res) => {
        console.log(error);
        res.status(500).json({
            err: error
        })
    }

    const SetAccountabilityCollection = async(id) => {
        const accountabilities = new Accountabilities({
            _id: new mongoose.Types.ObjectId(),
            AccountId: id,
            Mutual: [],
            Discipleship: []
        })
        await accountabilities.save()
    }

    return {
        async AddAccount(req, res) {
            try {
                const body = req.body;
                const account = new Account({
                    _id: new mongoose.Types.ObjectId(),
                    FirstName: body.FirstName,
                    LastName: body.LastName,
                    MiddleName: body.MiddleName,
                    UserName: body.UserName,
                    Password: body.Password,
                    BirthDate: new Date(body.BirthDate).toLocaleDateString(),
                    Email: body.Email,
                    ProfileImage: body.ProfileImage,
                    Address: {
                        Country: body.Address.Country,
                        Street: body.Address.Street,
                        Town: body.Address.Town,
                        City: body.Address.City
                    }
                });
                await account.save();
                await SetAccountabilityCollection(account._id)
                res.send({
                    message: `Inserted succesfully`
                })
            } catch (error) {
                errorHandler(error, res)
            }
        }
    }
}