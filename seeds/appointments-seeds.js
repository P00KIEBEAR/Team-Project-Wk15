const appointmentdata = [
  {
    Appointments_time: 2,
    Appointments_date: 7,
    Appointments_day: 'Sunday',
    Appointments_text: 'Routine checkup',
    Appointments_type: 'Checkup',
    user_id: 1,
  },
  {
    Appointments_time: 5,
    Appointments_date: 5,
    Appointments_day: 'Friday',
    Appointments_text: 'Runny nose',
    Appointments_type: 'Follow up',
    user_id: 2,
  },
  {
    Appointments_time: 9,
    Appointments_date: 2,
    Appointments_day: 'Tuesday',
    Appointments_text: 'X-ray broken arm',
    Appointments_type: 'X-ray',
    user_id: 1,
  },
  {
    Appointments_time: 8,
    Appointments_date: 3,
    Appointments_day: 'Wednesday',
    Appointments_text: 'Covid test',
    Appointments_type: 'Testing',
    user_id: 2,
  },
  {
    Appointments_time: 7,
    Appointments_date: 4,
    Appointments_day: 'Thursday',
    Appointments_text: 'Sore Throat',
    Appointments_type: 'Well-check',
    user_id: 2,
  },
];

const seedAppointments = () => appointmentdata.bulkCreate(appointmentdata);
module.exports = seedAppointments;
