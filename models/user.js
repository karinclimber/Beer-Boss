module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Giving the User model a first and last name of type STRING
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      location: DataTypes.STRING
    });
  
    User.associate = function(models) {
        User.hasOne(models.Password, {
            onDelete: "cascade"
        });
        User.hasOne(model.Email, {
            onDelete: "cascade"
        });
      // Associating User with Beers
      // When an User is deleted, also delete any associated Beers
      User.hasMany(models.Beer, {
        
      });
    };
  
    return User;
  };
  