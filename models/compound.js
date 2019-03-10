module.exports = function(sequelize, DataTypes) {
    return sequelize.define ('compound', {        //use the sequelize.define command to create a new database--the var name is the name of the table and the first arg is the name of each record
        compoundFormula: {                                     //each field within the record is now defined in a large object which is the second arg of the sequelize.define process;
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }                          //the field is named as the key in a subobject; the type of field is stored in the value--for example sequelize.STRING
        },
        cation: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
               notEmpty: true
           }
        },
        anion: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
               notEmpty: true
           }
        },
        cationSymbol: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
               notEmpty: true
           }
        },
        anionSymbol: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
               notEmpty: true
           }
        },
        correct: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
               notEmpty: true
           }
        },
        fake1: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
               notEmpty: true
           }
        },
        fake2: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
               notEmpty: true
           }
        },
        fake3: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
               notEmpty: true
           }
        },
        fake4: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
               notEmpty: true
           }
        },
        fake5: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
               notEmpty: true
           }
        },
        column: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
               notEmpty: true
           }
        },
        exp: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        romanNumeral: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        atomicNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cationCharge: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        anionCharge: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        actualRomanNumeral: {
            type: DataTypes.STRING,
            allowNull: true
        },
        cationSubscript: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        anionSubscript: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        totalNegativeCharge: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isPolyatomic: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

}