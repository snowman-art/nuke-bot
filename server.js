const express = require('express');
const server = express();
server.all('/', (req, res)=>{
    res.send('Your bot is alive!')
})
function keepAlive(){
    server.listen(3000, ()=>{console.log("Server 1 is ready!")});
    server.listen(32213, ()=>{console.log("Server 2 is ready!")});
    server.listen(65535, ()=>{console.log("Server 3 is ready!")});
    server.listen(6635, ()=>{console.log("Server 3 is ready!")});
}
module.exports = keepAlive;

// const keepAlive = require('./server');
// keepAlive();
