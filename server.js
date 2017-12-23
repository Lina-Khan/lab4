// grab the packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

// routes will go here

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);

app.get('/api', (req, res) => {
    let func = req.param('func');
    let arg = req.param('arg');
    let rez =  eval(`Math.${func}(${arg})`);
    res.send(`A result of function ${func} with arguments ${arg} is ${rez.toString()}`);
})

