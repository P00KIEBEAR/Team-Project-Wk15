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
  foreignKey: 'Appointments_time',

});
Appointment.belongsTo(Timeblock, {
  foreignKey: 'Appointments_time',

});

module.exports = { User, Appointment, Timeblock };
