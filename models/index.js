const User = require("./User");
const Pet = require("./Pet");

// User.hasMany(Pet);
// Pet.belongsTo(User)
Pet.belongsTo (User,{
    foreignKey: "user_id"
  });

module.exports = {
    User,
    Pet
}