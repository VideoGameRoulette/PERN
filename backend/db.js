const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "123456",
    host: "db",
    port: 5432,
    database: "userdb"
});

module.exports = pool;
