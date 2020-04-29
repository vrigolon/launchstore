require('dotenv').config();
const { Pool } = require('pg')

module.exports = new Pool({
  connectionString: process.env.DATABASE_URL || '',
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE
})