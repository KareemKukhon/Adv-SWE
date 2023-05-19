const express = require('express')
const router = express.Router()
const connection = require('../db')

router.post('/', (req,res) => {
    if (!req.session.user) {
        res.status(401).send('Unauthorized');
      }
      else{
    const { cv,email,degree,location,job_list } = req.body;
    const currentDate = new Date();
    const appDate = currentDate.toISOString().split('T')[0];
    
    const query = 
    'INSERT INTO applicationsubmission (CV,Email,Degree,Location,ApplicationDate,User_ID,JobListing_ID) VALUES (?,?,?,?,?,?,?)';

    const values = [cv, email, degree, location, appDate, req.session.id, job_list];

    connection.query(query,values, (error,results) => {
        if (error) {
            res.status(500).send('An error ocurred during submiting the data, try again or later.');
          } else {
            res.status(200).send('Application submission sent correctly:'+results);
          }
    })
      }
});

router.get('/view', (req,res) => {
    const employer = req.query.emp;

    const query = 
    'SELECT * FROM applicationsubmission WHERE JobListing_ID = (SELECT JobListing_ID FROM joblistings WHERE Employer = ?)';

    const value = employer;

    connection.query(query, value, (error, results) => {
        if (error) {
            res.status(500).send(' Server Side Error, Try Later');
            return;
          }
      
          if (results.length === 0) {
            res.status(200).send('No submissions available for positions in your company');
            return;
          }
          
          else {
            res.status(200).send(results);
          }
    })

});

router.post('/manage', (req,res) => {
    const query = 
    'UPDATE applicationsubmission SET status = ? WHERE ID= ?';

    const values = [req.body.status,req.body.ID];

    connection.query(query,values , (error,results) => {
        if (error) {
            res.status(500).send('Server Side Error, Try Later.');
          } else {
            res.status(200).send('Status changed to :'+req.body.status);
          }
    })
});

module.exports = router;