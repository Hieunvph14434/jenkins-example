const express = require('express')
const app = express()

app.get('/about', function (req, res) {
    // init 111
  res.send('Hello World 999')
  console.log('123');
  
})

app.listen(3003)