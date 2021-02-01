const router = require('express').Router();
const { Appointment, Timeblock, User } = require('../../models');
//routes will use /api/schedule/ {route}

router.post('/all', async (req, res) => {
  console.log(req.session.user_id);


  const {
    Appointments_time,
    Appointments_date,
    Appointments_day,
    Appointments_text,
    Appointments_type,

  } = req.body;
  const appointments = await Appointment.create({
    Appointments_time: Appointments_time,
    Appointments_date: Appointments_date,
    Appointments_day: Appointments_day,
    Appointments_text: Appointments_text,
    Appointments_type: Appointments_type,
    user_id: req.session.user_id,
  })
    .then(appointments => res.json(appointments))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/', async (req, res) => {
  //put route code here
  res.send('this Schedule route was successful (put)');
});

//renders main scheduling page
router.get('/', (req, res) => {
  console.log('======================');
  Appointment.findAll({
    // where: {
    //   user_id: req.session.user_id,
    // },

    attributes: [
      'id',
      'Appointments_time',
      'Appointments_date',
      'Appointments_day',
      'Appointments_text',
      // 'user_id'
    ],
    include: [
      {
        model: User,
        attributes: ['username'],
      },
      Timeblock,
    ],
  })
    .then(appointments => {
      appointments = appointments.map(appointment =>
        appointment.get({ plain: true })
      );
      res.render('scheduling', {
        appointments,
        loggedIn: true,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.get('/all', async (req, res) => {
//   const appointments = await Appointment.findAll({
//     // include: [
//     //   {
//     //     model: User,
//     //   },
//     // ],
//   });
//   console.log(appointments[1].Appointments_time);
//   res.json(appointments);
// });

router.get('/:user', async (req, res) => {
  const { user } = req.params;
  const { id } = await User.findOne({
    where: {
      username: user,
    },
  });
  const appointments = await Appointment.findAll({
    where: {
      user_id: id,
    },
  });
});

router.delete('/', async (req, res) => {
  //delete route code here
  res.send('this Schedule route was successful (delete)');
});

module.exports = router;
