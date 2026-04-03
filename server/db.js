const { Pool } = require("pg");

function buildDatabaseUrl() {
  if (process.env.DATABASE_URL) return process.env.DATABASE_URL;

  const host = process.env.DB_HOST;
  const port = process.env.DB_PORT;
  const db = process.env.DB_NAME;
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;

  const encodedUser = encodeURIComponent(user);
  const encodedPassword = encodeURIComponent(password);

  return `postgres://${encodedUser}:${encodedPassword}@${host}:${port}/${db}`;
}

const databaseUrl = buildDatabaseUrl();

// One pool for the whole server.
const pool = new Pool({
  connectionString: databaseUrl,
});

module.exports = { pool };

