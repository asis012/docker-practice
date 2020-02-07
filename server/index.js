const express = require('express');
const db = require('mysql');
const cors = require('cors');
const connection = db.createConnection({
  host: 'database',
  user: 'root',
  password: '',
  port: '3306',
  database: 'docker'
});
connection.connect(function(err) {
  if (!err) {
    console.log('Connected!');
  } else {
    throw err;
  }
});

const PORT = 8090;

// App
//const queryy = 'SELECT * FROM docker ';
const app = express();
app.use(cors());
// app.use(bodyparser.json());
app.get('/', (req, res) => {
  res.send('ok');
  // connection.query(queryy, (err, rows) => {
  //   if (rows) res.send(rows);
  //   if (err) throw err;
  // });
});

app.listen(PORT);
