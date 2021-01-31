const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Appointment extends Model { }

Appointment.init(
  {
    //--ID
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //--Time
    Appointments_time: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'Timeblock',
        key: 'id',
      },
    },
    // --appt date
    Appointments_date: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // app day
    Appointments_day: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //--appt message
    Appointments_text: {
      type: DataTypes.STRING,
      allowNull: false,


    },
    //--appointment type
    Appointments_type: {
      type: DataTypes.STRING,
      allowNull: false,


    },
    //--ID of user(foreign key)
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Appointments',
  }
);

module.exports = Appointment;
