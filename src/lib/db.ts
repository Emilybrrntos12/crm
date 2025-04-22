import { Pool } from 'pg';
import 'dotenv/config';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Neon requiere esto para conexiones SSL
  },
});

export async function getUsers() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM user LIMIT 5');
    return result.rows;
  } finally {
    client.release();
  }
}