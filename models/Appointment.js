const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Appointments extends Model { }

Appointments.init(
  {
    //--ID
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    //--Time
    Appointments_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Timeblock',
        key: 'id'
      }
    },
    // --appt date
    Appointments_date: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // app day
    Appointments_day:{
      type: DataTypes.STRING,
      allowNull: false
    },
    //--appt message
    Appointments_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    //--appointment type
    Appointments_type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    //--ID of user(foreign key)
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Appointments'
  }
);

module.exports = Appointments;