const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; 

app.use(bodyParser.json());

const doctorRoutes = require('./routes/doctorRoutes.js');
app.use('/', doctorRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });