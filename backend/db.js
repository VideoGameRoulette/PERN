const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "551666545b837d480aed4c554cf4f13b",
    host: "localhost",
    port: 5432,
    database: "userdb"
});

module.exports = pool;