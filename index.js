const express = require('express')
const app = express()

app.get('/about', function (req, res) {
    // init 111 888111ssa 
  let hello2 = "hello";
  res.send('Hello World 999', hello2)
})

app.listen(3003)
