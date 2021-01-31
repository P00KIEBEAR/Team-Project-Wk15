const router = require('express').Router();
const { Appointment, Timeblock, User } = require('../../models');

<<<<<<< HEAD
router.get('/', async (req, res) => {
  try{
  console.log(req.session.user_id);
  const { user_id } = req.session;
    let appointments = user_id 
      ? await Appointment.findAll({
        where: {
          user_id: req.session.user_id,
        },
        include: [
          {
            model: User,
            attributes: ['username'],
          },
          Timeblock,
        ],
      }).then ( appointments => 
        appointments?.map(appointment =>
          appointment.get({ plain: true })
        )
      ) 
      : null ;
  
    // console.log(appointments)
    
    res.render('homepage', {
      appointments,
      loggedIn: true,
=======
router.get('/', (req, res) => {
  console.log(req.session.user_id);
  Appointment.findAll({
    where: {
      user_id: req.session.user_id,
    },

    attributes: [
      'id',
      'Appointments_time',
      'Appointments_date',
      'Appointments_day',
      'Appointments_text',
      'user_id',
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
      // console.log(appointments)
      res.render('homepage', {
        appointments,
        loggedIn: true,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
>>>>>>> main
    });
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});

module.exports = router;
