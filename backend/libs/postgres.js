const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'proyect',
    password: 'proyect123',
    database: 'itsurvivors',
  });

  await client.connect();
  return client;
}

module.exports = getConnection;
