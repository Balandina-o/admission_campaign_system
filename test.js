const path = require('path');
const winston = require('winston');
const Campaign = require("./public/campaign");

const dbPath = path.resolve(path.parse(__dirname).root, 'Database')

const logger = winston.createLogger({
    level: 'info',
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: path.resolve(dbPath, 'error.log'), level: 'error' }),
        new winston.transports.File({ filename: path.resolve(dbPath, 'output.log') }),
    ],
});

const campaign = new Campaign(logger);
campaign.getSpeciality(1).then(data => {
    console.log(data);
});
