const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 9999;


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'jobboard'
});


db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to the database');
  }
});


app.get('/save', (req, res) => {
  const { username, password, job_id } = req.query;

  const checkUserQuery = 'SELECT * FROM users WHERE Username = ? AND Pssword = ?';
  db.query(checkUserQuery, [username, password], (err, results) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      if (results.length === 0) {
        res.status(401).json({ error: 'Invalid username or password' });
      } else {
        const user = results[0];
        const query = 'INSERT INTO savedjobs (User_ID, JobListing_ID) VALUES (?, ?)';
        const params = [user.ID, job_id];

        db.query(query, params, (err, results) => {
          if (err) {
            console.error('Error executing SQL query:', err);
            res.status(500).json({ error: 'An error occurred' });
          } else {
            res.json({ message: 'Job saved successfully' });
          }
        });
      }
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
