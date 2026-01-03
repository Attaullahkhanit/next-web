import mysql, { Pool } from 'mysql2/promise';

// 1. Extend the global object type to include our pool
declare global {
  var _mysqlPool: Pool | undefined;
}

// 2. Initialize the pool
let pool: Pool;

if (process.env.NODE_ENV === 'production') {
  pool = mysql.createPool({
    host: process.env.DB_HOST || 'db',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT || '3306'),
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
} else {
  // In development mode, use a global variable so the pool 
  // is preserved across HMR (Hot Module Replacement) updates.
  if (!global._mysqlPool) {
    global._mysqlPool = mysql.createPool({
      host: process.env.DB_HOST || 'db',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: parseInt(process.env.DB_PORT || '3306'),
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }
  pool = global._mysqlPool;
}

export default pool;