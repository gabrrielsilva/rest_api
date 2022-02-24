import express, { urlencoded } from 'express';
import { errorHandler } from './middleware/errorHandler.js';
const app = express();

import { router } from './route/postRoute.js';

app.use(express.json());
app.use('/', router);
app.use(errorHandler);

app.listen(3001, () => {
  console.log('Server initialized in http://localhost:3001');
});
