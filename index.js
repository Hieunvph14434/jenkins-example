const express = require('express');
const app = express();

app.get('/about', function (req, res) {
    // init 111 888111ssa das
  let hello2 = "hello";
  console.log(hello2)
  
  res.send('Hello World 999');
});

app.listen(3003);
