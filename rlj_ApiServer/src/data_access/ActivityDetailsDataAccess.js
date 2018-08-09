const ActivityDetails = require('../models/ActivityDetails');
const timeStamp = require('../helper/timestamp');
module.exports = (mongoose) => {
	return {
		async AddExplanation(req) {
			const body = req.body;
			await ActivityDetails.update(
				{ "_id": new mongoose.Types.ObjectId(body.id) },
				{
					$set: {
						Explanation: {
							Body: body.Explanation,
							TimeStamp: timeStamp(),
						}
					}
				}
			).exec();
		},

		async SetAsSeen(req) {
			const body = req.body;
			await ActivityDetails.update(
				{ "_id": new mongoose.Types.ObjectId(body.id) },
				{
					$set: {
						SeenBy: {
							AccountId: body.AccountId,
							TimeStamp: timeStamp()
						}
					}
				}
			).exec();
		}
	}
}