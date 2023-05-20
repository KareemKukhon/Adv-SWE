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

// Define a route to handle job search
app.get('/jobs', (req, res) => {
  // Retrieve search parameters from request query
  const { name , salary } = req.query;
  
  // Perform job search logic here using SQL queries
  const query = `  SELECT * FROM joblistings WHERE JobTitle like ? and minSalary >= ?  `;
  const params = [`%${name}%`, salary];

  db.query(query, params, (err, results) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.json(results);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

