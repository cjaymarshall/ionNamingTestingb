const express = require('express');
const bodyParser = require('body-parser');
const _ = require('underscore');
const db = require('./db.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.post('/compounds', function(req, res) {
    var body = req.body  //, 'compoundFormula', 'cation', 'anion','cationSymbol', 'anionSymbol','correct','fake1', 'fake2', 'fake3','fake4','fake5','column', 'exp', 'romanNumeral', 'atomicNumber', 'cationCharge', 'anionCharge', 'actualRomanNumberal', 'cationSubscript', 'anionSubscript', 'totalNegativeCharge', 'isPolyatomic');

    db.compound.create(body).then(function(compound) {
        res.json(compound.toJSON());
    }, function(e) {
        res.status(400).json(e);
    });
});

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("app server started at PORT " + PORT);
    });
});