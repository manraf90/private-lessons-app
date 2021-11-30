import dotenv from 'dotenv';

dotenv.config();

const config = {
    host: process.env.HOST || '127.0.0.1',
    port: process.env.PORT || 7000,
    atlasUrl: process.env.ATLAS_URL || ''
};

export default config;
