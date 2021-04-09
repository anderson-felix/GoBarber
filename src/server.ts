import express from 'express';
import 'reflect-metadata';

import routes from './routes';
import './database';
import uploadConfig from './config/upload';

const server = express();

server.use(express.json());
server.use('/files', express.static(uploadConfig.directory));
server.use(routes);

server.listen(8000, () => {
  console.log('🚀 server listening on port 8000 ✔');
});
