import express from 'express';

import routes from './routes';

const server = express();

server.listen(8000);

server.use(express.json());

server.use(routes);

console.log('server listening on port 8000');
