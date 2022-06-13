const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    mongouri: process.env.mongouri,
    PORT: process.env.PORT || 5000,
}