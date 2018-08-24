const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    async HashPassword(data) {
        let salt = await bcrypt.genSalt(saltRounds);
        return await bcrypt.hash(data, salt);
    },
    async ComparePassword(data, encryptedString) {
        return await bcrypt.compare(data, encryptedString);
    }
};