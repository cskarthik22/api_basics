var express = require('express');
var webapp = express();

webapp.listen(8000, listening);
webapp.use(express.static('public'));
function listening() {
    console.log("Hellooooo... i am listening....");
}

webapp.get('/search', () => { console.log("What do you want to search")});