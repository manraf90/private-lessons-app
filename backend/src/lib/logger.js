import winston from 'winston';

const loggerFormat = winston.format.printf(({
    level, message, timestamp, ...metadata
}) => {
    let msg = `${timestamp} [${level}] : ${message} `;
    if (metadata) {
        msg += JSON.stringify(metadata);
    }
    return msg;
});

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            level: 'info',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.colorize(),
                winston.format.json(),
                loggerFormat
            )
        }),
        new winston.transports.Console({
            level: 'error',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.colorize(),
                winston.format.json(),
                loggerFormat
            )
        })
    ]
});

export default logger;
