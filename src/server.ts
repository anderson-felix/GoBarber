import express from 'express';
import 'reflect-metadata';

import routes from './routes';
import './database';

const server = express();

server.use(express.json());
server.use(routes);

server.listen(8000, () => {
  console.log('🚀 server listening on port 8000 ✔');
});
