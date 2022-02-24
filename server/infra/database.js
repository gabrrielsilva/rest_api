import dotenv from 'dotenv';
dotenv.config();

import pgPromise from 'pg-promise';
const pgp = new pgPromise();

export const db = pgp({
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE,
});
