const seedUsers = require('./user-seeds');
const seedAppointments = require('./appointments-seeds');
const seedTimeBlock = require('./time-block-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedTimeBlock();
  await seedAppointments();
  process.exit(0);
};

seedAll();
