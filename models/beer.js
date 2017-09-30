exports = function(sequelize, DataTypes) {
    var Beer = sequelize.define("Beer", {
      beerconsumed: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,50]
        }
      },
    breweryname: {
      type: DataTypes.STRING,
      allowNull: false
    },
      beertype: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,50]
        }
    },
    beerscore: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    comments: {
        type: DataTypes.STRING,
    }
    });
  
    Beer.associate = function(models) {
      // We're saying that a Beer should belong to an User
      // A Beer can't be created without a User due to the foreign key constraint
      Beer.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Beer;
  };
  