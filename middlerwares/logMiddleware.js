const  morgan = require('morgan');
const fs = require('fs');
const path = require('path');


const logStream = fs.createWriteStream(path.join(__dirname, '../logs/access.log'), { flags: 'a' });

const logMiddleware = morgan('combined', { stream: logStream });

module.exports = logMiddleware;