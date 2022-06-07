import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import fs from 'fs';

const fsPromises = require("fs").promises;

export const Log = async (message: string) => {
  const dateTime: string = `${format(new Date(), 'yyyy\\MM\\dd\tHH:mm:ss')}`;
  const log: string = `${dateTime}\t${uuidv4()}\t${message}\n`;
  
  try {
    !fs.existsSync(path.join(__dirname, 'logs')) && await fsPromises.mkdir(path.join(__dirname, 'logs'));

    await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLogs.txt'), log);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
