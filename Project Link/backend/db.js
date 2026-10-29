
const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),

  ssl: {
    ca: process.env.DB_SSL_CA,
    rejectUnauthorized: true,
  },

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

async function testConnection() {
  try {
    const connection = await db.getConnection();

    console.log("MySQL connected successfully!");
    console.log("Database:", process.env.DB_NAME);

    connection.release();
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
}

testConnection();

module.exports = db;
