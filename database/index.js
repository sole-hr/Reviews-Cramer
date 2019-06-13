const { Pool, Client } = require('pg');
const postgressInfo = require('./postgresInfo');

const pool = new Pool({
  user: postgressInfo.user,
  host: postgressInfo.host,
  database: postgressInfo.database,
  password: postgressInfo.password,
  port: postgressInfo.port,
})

pool.connect((err, success) => {
  if(err){
    console.log('error connecting to postgress db:', err);
  } else {
    console.log('success connecting to postgres db');
  }
})

module.exports = pool;