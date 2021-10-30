import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import config from './config/index.js';
import logger from './lib/logger.js';
import Router from './routes/index.js';

const app = express();

app.disable('x-powered-by');
app.use(express.json());
app.use(cors());

// DATABASE

mongoose
    .connect(config.atlasUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(() => {
        logger.info('Connected to Mongo database successfully');
    })
    .catch((error) => {
        logger.error({ message: error.message });
    });

// APP
app.use('/', Router);

app.listen(config.port, () => {
    logger.info(`Running backend service on http://${config.host}:${config.port}.`);
});
