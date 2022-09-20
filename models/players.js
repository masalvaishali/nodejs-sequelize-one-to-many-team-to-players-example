module.exports = (sequelize, DataTypes) => {
  const Players = sequelize.define("Players", {
    playerName: {
      type: DataTypes.STRING,
    },
    playerType: {
      type: DataTypes.STRING,
    },
    captain: {
      type: DataTypes.STRING, // DataTypes.BOOLEAN
    },
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  });
  Players.associate = (models) => {
    Players.belongsTo(models.Teams, {
      foreignKey: "creatorId",
    });
  };
  return Players;
};
