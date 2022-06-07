import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import EventEmitter from 'events';
import { Log } from  './middleware/log';

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on('log', (msg: string) => Log(msg));

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3030;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
  myEmitter.emit('log', `⚡️[server]: Server is running at http://localhost:${port}`);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
