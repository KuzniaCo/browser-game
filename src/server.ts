import http from 'http';
import {app} from './app';

const port = process.env.PORT || 3000;

const server:http.Server = http.createServer(app);

server.listen(port);
