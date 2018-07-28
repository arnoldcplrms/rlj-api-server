const activities = "/api/activities";
const accounts = "/api/accounts";
const accountability = "/api/accountabilities";
const activitiesDetails = '/api/activity_details';

module.exports = {
    ACCOUNTS: accounts,
    LOGIN: `${accounts}/login`,

    ACTIVITIES: activities,
    ACTIVITIES_BY_ID: `${activities}/:id`,
    ACTIVITIES_SEEN: `${activities}/seen`,

    ACTIVITY_DETAILS_SEEN: `${activitiesDetails}/seen`,
    ACTIVITY_DETAILS_EXP: `${activitiesDetails}/explain`,

    ACCOUNTABILITIES: accountability
}