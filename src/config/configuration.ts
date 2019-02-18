import { config } from 'dotenv';

import { Iconfig } from './Iconfig';

const envVars: NodeJS.ProcessEnv = process.env;

config();
const configuration = Object.freeze({
   MONGO_URL: process.env.MONGO_URL,
   port: envVars.PORT

}) as Iconfig;

export default configuration;