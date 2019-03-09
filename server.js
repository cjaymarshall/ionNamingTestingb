const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.listen(PORT, function() {
    console.log("app server started at PORT " + PORT);
});