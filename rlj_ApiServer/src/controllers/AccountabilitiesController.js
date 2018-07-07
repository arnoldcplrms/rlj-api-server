const Accountabilites = require('../models/Accountabilities')
module.exports = (mongoose) => {
    const errorHandler = (error, res) => {
        console.log(error);
        res.status(500).json({
            err: error
        })
    }

    const AddMutual = async(req) => {
        const data = req.body;
        await Accountabilites.update({
            "_id": new mongoose.Types.ObjectId(data.id)
        }, {
            $push: {
                Mutual: data.Id
            }
        }).exec()
    }

    const Discipleship = async(req) => {
        const data = req.body;
        await Accountabilites.update({
            AccountId: data.AccountId
        }, {
            $push: {
                Discipleship: {
                    $each: data.AccountIds
                }
            }
        }).exec();

    }

    return {
        async AddAccountability(req, res) {
            try {
                const data = req.body;
                switch (data.Mode) {
                    case 'M':
                        await AddMutual(req);
                        break;
                    case 'D':
                        await Discipleship(req);
                        break;
                }
                res.send({
                    message: 'Accountabilities added.'
                })
            } catch (error) {
                errorHandler(error, res);
            }
        }
    }
}