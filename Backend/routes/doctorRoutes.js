const express = require('express');
const router = express.Router();
const doctorsData = require('../Data/doctorDatabase');


// router.get('/', (req, res) => {
//     res.json(doctorsData);
//   });

  router.get('/doctors', (req, res) => {
    res.json(doctorsData);
  });


  module.exports = router;