'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tracks = sequelize.define('Tracks', {
    name: DataTypes.STRING
  }, {});
  Tracks.associate = function(models) {
    // associations can be defined here
  };
  return Tracks;
};