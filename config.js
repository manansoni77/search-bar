const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    mongouri: String(process.env.mongouri),
    PORT: process.env.PORT || 5000,
}