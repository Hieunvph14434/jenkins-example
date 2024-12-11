const express = require('express')
const app = express()

app.get('/about', function (req, res) {
    // init 111 888111ssa
  let hello3 = "hello";
  res.send('Hello World 999', hello3)
})

app.listen(3003)
