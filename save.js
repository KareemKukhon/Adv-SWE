// Import required modules
const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 9999;

// Set up database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'jobboard'
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to the database');
  }
});

app.get('/save', (req, res) => {
  const { user_id , job_id } = req.query;

  const query = `    INSERT INTO savedjobs(User_ID, JobListing_ID) VALUES (?,?)`;
  const params = [user_id, job_id];

  db.query(query, params, (err, results) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ error: 'An error occurred' });
    } 
    else {
        res.json({ message: 'Job saved successfully' });
      }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

