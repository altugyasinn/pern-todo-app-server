const Pool = require('pg').Pool


const pool = new Pool({
    user: "your_user_name",
    password: "your_password_comes_here",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;