const { Appointment, Timeblock, User } = require('../../models');



router.get('/', (req, res) => {
  ; console.log(req.session.user_id);
  Appointment.findAll({

    where: {
      user_id: req.session.user_id,

    },
    attributes: ['id',
      'Appointments_time',
      'Appointments_date',
      'Appointments_day',
      'Appointments_text',
      'user_id',
    ],
    include:
    {
      model: User, attributes: ['username'],
    }, Timeblock,

  })
    .then(appointments => {
      appointments = appointments.map(appointment =>
        appointment.get({ plain: true }));
      // console.log(appointments)

      res.render('homepage', {
        appointments, loggedIn: true,

      });
    })
})
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
module.exports = router;