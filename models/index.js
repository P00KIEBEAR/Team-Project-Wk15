const User = require('./User');
const Appointment = require('./Appointment');
const Timeblock = require('./Time-block');

Appointment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

User.hasMany(Appointment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Timeblock.hasMany(Appointment, {
  foreignKey: 'appointments_time',

});
Appointment.belongsTo(Timeblock, {
  foreignKey: 'appointments_time',

});

module.exports = { User, Appointment, Timeblock };
