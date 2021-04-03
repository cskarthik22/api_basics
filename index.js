const fs = require('fs');
const express = require('express');

/* Build a webserver using express package */
const app = express();
app.use(express.static("build"));
const path = require('path');
const { ppid } = require('process');
ppid.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname,'build','index.html'));
});
/* webserver listeing on port 7000 */
var port = process.env.PORT || 8000;
app.listen(port, display);
/* webserver serving static html content via webbrowser */


/*
var lettersdata = {
    "A" : "Apple",
    "B" : "Ball",
    "C" : String.raw`Cat
    next line
             next next line`
}
*/



function display(){
    console.log("Listening....");
}

app.get("/search", (request,response) => {response.send("What you want to search?");});
