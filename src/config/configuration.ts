import { config } from 'dotenv';

import { Iconfig } from './Iconfig';

const envVars: NodeJS.ProcessEnv = process.env;

config();
console.log(`port is ${envVars.PORT}` );
const configuration = Object.freeze({

   port: envVars.PORT
}) as Iconfig;

export default configuration;