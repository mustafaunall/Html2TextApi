import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { convert } from 'html-to-text'

dotenv.config();

const app: Express = express();

app.get('/api/html2txt', (req: Request, res: Response) => {
  const input = req.query.html;
  const result = convert(String(input));
  res.status(200).json({ result });
});

app.listen(5600, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:5600`);
});
