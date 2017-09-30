module.exports = function(sequelize, DataTypes) {
    var Password = sequelize.define("Password", {
      // Giving the Password model a name of type STRING

      password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [7]
          }
      }
    });
  
    Password.associate = function(models) {
      // Associating Password with Beers

      Password.belongsTo(models.User, {
        onDelete: "cascade"
      });
    };
  
    return Password;
  };