const express = require('express');
var app = express();
app.listen(3000);

app.use(express.static('Source'));

app.get('/', (req, res) =>{
    res.sendFile(__dirname + "/index.html");
});
app.get('*',function(req,res){
    res.sendFile(__dirname + "/404.html")
});