const Account = require('../models/Accounts')
module.exports = (mongoose) => {
    const errorHandler = (error, res, message) => {
        console.log(error);
        res.status(400).send({
            message: message
        })
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
                    BirthDate: new Date(body.BirthDate),
                    Email: body.Email,
                    ProfileImage: body.ProfileImage,
                    Address: {
                        Country: body.Address.Country,
                        Street: body.Address.Street,
                        Town: body.Address.Town,
                        City: body.Address.City
                    }
                })

                await account.save();

                res.send({
                    message: `Inserted succesfully`
                })
            } catch (error) {
                console.log(error);
                res.status(500).json({
                    err: error
                })
            }
        }
    }
}