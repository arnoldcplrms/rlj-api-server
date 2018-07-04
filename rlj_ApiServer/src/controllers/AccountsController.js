const accounts = 'Accounts'
module.exports = (mongo, url, objectId) => {

    const errorHandler = (error, res, message) => {
        console.log(error);
        res.status(400).send({
            message: message
        })
    }

    return {
        async AddAccount(req, res) {
            const body = req.body;
            const db = await mongo.connect(url);
            try {
                const collection = db.collection(accounts);
                await collection.insertOne({
                    FirstName: body.FirstName,
                    LastName: body.LastName,
                    MiddleName: body.MiddleName,
                    UserName: body.UserName,
                    Password: body.Password,
                    BirthDate: body.BirthDate,
                    Email: body.Email,
                    ProfileImage: body.ProfileImage,
                    Address: {
                        Country: body.Address.Country,
                        Street: body.Address.Street,
                        Town: body.Address.Town,
                        City: body.Address.City
                    }
                });
                res.send({
                    message: `Inserted succesfully`
                });
            } catch (error) {
                errorHandler(error, res, "An error occured");
            }
            db.close();
        }
    }
}