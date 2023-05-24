const express = require('express')
const router = express.Router()
const connection = require('../db')

router.post('/', (req, res) => {
  const query = 'SELECT * FROM users WHERE username = ? AND Pssword = ?';
  const parameters = [req.body.username, req.body.password];

  connection.query(query, parameters, (error, results) => {
    if (error) {
      res.status(500).send(' Server Side Error, Try Later');
      return;
    }

    if (results.length === 0) {
      res.status(401).send('Invalid credentials');
      return;
    }
    
    else {
      req.session.user = { username: parameters[0], name: parameters[1], id: results[0].id };
      res.status(200).send('Login successful');
    }
  });

});

module.exports = router;
