module.exports = (sequelize, DataTypes) => {
  const Teams = sequelize.define("Teams", {
    teamName: {
      type: DataTypes.STRING,
    },
    groupName: {
      type: DataTypes.STRING,
    },
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  });
  Teams.associate = (models) => {
    Teams.hasMany(models.Players, {
      foreignKey: "creatorId",
    });
  };
  return Teams;
};
