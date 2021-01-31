const User = require('./User');
const Appointment = require('./Appointment');
// const Timeblock = require('./Time-block');

Appointment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

User.hasMany(Appointment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

// Timeblock.hasMany(Appointment, {
//   foreignKey: 'appointments_time',
//   onDelete: 'SET NULL',
// });
// Appointment.belongsTo(Timeblock, {
//   foreignKey: 'appointments_time',
//   onDelete: 'SET NULL',
// });

module.exports = { User, Appointment, Timeblock };
