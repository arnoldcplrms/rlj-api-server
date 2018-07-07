const activities = "/api/activities";
const accounts = "/api/accounts";
const accountability = "/api/accountabilities";
module.exports = {
    ACCOUNTS: accounts,

    ACTIVITIES: activities,
    ACTIVITIES_BY_ID: `${activities}/individual`,
    ACTIVITIES_SEEN: `${activities}/seen`,

    ACCOUNTABILITIES: accountability
}