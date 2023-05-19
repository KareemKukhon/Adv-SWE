const express = require('express');
const routePrefix ='/api/v1'
const app = express();
const loginRouter = require('./routes/login');
const submissionRouter = require('./routes/submission');
const morgan = require('morgan');
const session = require('express-session');
app.use(express.json());

app.listen(3000, function () {
  console.log('Server running on port 3000');
});

app.use(morgan('tiny')); 

app.use(
  session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
  })
);

app.use(`${routePrefix}/login`,loginRouter);
app.use(`${routePrefix}/submission`,submissionRouter);






  