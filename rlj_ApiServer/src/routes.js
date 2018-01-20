const mongo = require('mongodb');
// const objectId = mongo.ObjectID;
const config = require('./config/config');
const mongoose = require('mongoose');
mongoose.connect(config.MONGO_URL, {
    useNewUrlParser: true
});
const ROUTE = require('./endpoints');

const AccountsController =
    require('./controllers/AccountsController')(mongoose);

// const ActivitiesController =
//     require('./controllers/ActivitiesController')(mongo, url, objectId);

module.exports = (app) => {
    //#region AccountsController
    app.post(ROUTE.ACCOUNTS,
        AccountsController.AddAccount);
    //#endregion

    //#region ActivitiesController
    // app.post(ROUTE.ACTIVITIES_BY_ID,
    //     ActivitiesController.GetActivityLogById)

    // app.post(ROUTE.ACTIVITIES,
    //     ActivitiesController.LogActivity);

    // app.put(ROUTE.ACTIVITIES,
    //     ActivitiesController.AddExplanation);

    // app.put(ROUTE.ACTIVITIES_SEEN,
    //     ActivitiesController.SetAsSeen)

    // app.delete(ROUTE.ACTIVITIES,
    //     ActivitiesController.DeleteActivity);
    //#endregion
}