import { Servers } from "./Server";
import config from "./config/configuration";

const server = new Servers(config);

server.bootstrap();
server.run();

export {server}
