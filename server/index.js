const express = require('express');
const db = require('mysql');
const cors = require('cors');
const app = express();
app.use(cors());
const connection = db.createConnection({
  host: process.env.MYSQL_HOST_IP,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});
connection.connect(function(err) {
  if (!err) {
    console.log('Connected! Successfule boilerplate; reat-node-mysql');
  } else {
    throw err;
  }
});

const PORT = 8000;

// App
//const queryy = 'SELECT * FROM docker ';

// app.use(bodyparser.json());
app.get('/', (req, res) => {
  res.send('ok');
  // connection.query(queryy, (err, rows) => {
  //   if (rows) res.send(rows);
  //   if (err) throw err;
  // });
});

app.listen(PORT);
