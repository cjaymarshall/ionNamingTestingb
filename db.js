const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
var sequelize;

if (env === 'production') {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres'
    });
} else {
    const sequelize = new Sequelize(undefined, undefined, undefined, {
        'dialect': 'sqlite',
        'storage': __dirname + '/data/compound.sqlite',
         operatorsAliases: false
    });
}




var db = {};

db.compound = sequelize.import(__dirname + '/models/compound.js');
db.sequelize = sequelize;
db.Sequelize = Sequelize;

console.log(db);

module.exports = db;