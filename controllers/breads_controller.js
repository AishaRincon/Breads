const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
// http:localhost:3000/breads/1
breads.get('/', (req, res) => {
  res.render('Index',
    {
      breads: Bread,
      title: 'Index Page'
    }
  )
  // res.send(Bread)
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
  res.render('Show', {
    bread: Bread[req.params.arrayIndex]
  })
})



module.exports = breads
