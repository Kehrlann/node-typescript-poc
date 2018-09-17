import { greet } from './util';
import * as express from 'express';

greet('new app');

const app = express();
app.get('/', (req, res, next) => {
  const name = req.query.name || 'world';
  greet(name);
  res.send(`Hello ${name} !`);
});

app.listen(3000);
