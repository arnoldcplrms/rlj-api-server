const activities = "Activities"
const timeStamp = new Date().toLocaleString();
module.exports = (mongo, url, objectId) => {

    const errorHandler = (error, res, message) => {
        console.log(error);
        res.status(400).send({
            message: message
        })
    }

    const AccountabilityName = async(id) => {
        const db = await mongo.connect(url);
        try {
            const collection = db.collection(activities);
            const result = await collection.findOne({
                "_id": objectId(id)
            });
            console.log(result);
            return result.FirstName;
        } catch (error) {
            errorHandler(error, res, 'An error occurred');
            return;
        }
        db.close();
    }

    return {
        async GetActivityLogById(req, res) {
            const db = await mongo.connect(url);
            try {
                const collection = db.collection(activities);
                const result = await collection.find({
                    "_id": objectId(req.body.id)
                }).toArray();
                res.send(result);
            } catch (error) {
                errorHandler(error, res, 'An error occurred')
            }
            db.close();
        },

        async LogActivity(req, res) {
            const body = req.body;
            const db = await mongo.connect(url);
            try {
                const collection = db.collection(activities);
                await collection.insertOne({
                    AccountId: body.AccountId,
                    Activity: body.Activity,
                    TimeStamp: timeStamp,
                    IsMobile: body.IsMobile,
                    MacAddress: body.MacAddress,
                    Explanation: body.Explanation,
                    Seen: false,
                    SeenBy: {
                        AccountId: body.SeenBy.AccountId,
                        TimeStamp: body.SeenBy.TimeStamp
                    }
                });
                res.send({
                    message: `Inserted succesfully`
                });
            } catch (error) {
                errorHandler(error, res, "An error occured");
            }
            db.close();
        },

        async DeleteActivity(req, res) {
            const db = await mongo.connect(url);
            try {
                const collection = db.collection(activities);
                await collection.deleteOne({
                    "_id": objectId(req.body.id)
                });
                res.send({
                    message: `Deleted succesfully`
                });
            } catch (error) {
                errorHandler(error, res, error.message)
            }
            db.close();
        },

        async AddExplanation(req, res) {
            const db = await mongo.connect(url);
            const body = req.body;
            try {
                const collection = db.collection(activities);
                await collection.update({
                    "_id": objectId(req.body.id)
                }, {
                    $set: {
                        Explanation: {
                            Body: body.Explanation,
                            TimeStamp: timeStamp
                        }
                    }
                })
                res.send({
                    message: "Updated Successfully"
                });
            } catch (error) {
                errorHandler(error, res, 'An error occurred')
            }

            db.close();
        },

        async SetAsSeen(req, res) {
            const db = await mongo.connect(url);
            const body = req.body;
            try {
                const collection = db.collection(activities);
                await collection.update({
                    "_id": objectId(body.id)
                }, {
                    $set: {
                        Seen: true,
                        SeenBy: {
                            AccountId: body.AccountId,
                            FirstName: body.FirstName,
                            TimeStamp: timeStamp
                        }
                    }
                })
                res.send({
                    message: "Updated Successfully",
                    body
                });
            } catch (error) {
                errorHandler(error, res, 'An error occurred')
            }

            db.close();
        }
    }
}