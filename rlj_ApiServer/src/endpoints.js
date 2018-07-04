const activities = "/api/activities";
const accounts = "/api/accounts";
module.exports = {
    ACCOUNTS: accounts,
    ACTIVITIES: activities,
    ACTIVITIES_BY_ID: `${activities}/individual`,
    ACTIVITIES_SEEN: `${activities}/seen`
}