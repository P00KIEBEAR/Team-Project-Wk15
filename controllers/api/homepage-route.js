const router = require('express').Router();
const { Appointment, Timeblock, User } = require('../../models');



router.get('/', (req, res) => {
  ; console.log(req.session.user_id);
  Appointment.findAll({

    include:
    {
      model: User,
      attributes: ['username']
    }, Timeblock,


  })
    .then(appointments => {
      if (appointments) {
        const appts = appointments.map(appointment =>
          appointment.get({ plain: true }));

        console.log(appts[0])
        res.render('homepage', {
          appts, loggedIn: true,

        });
      }
      else {
        res.render('homepage', {
          loggedIn: true,
        })
      }
    })

    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})
module.exports = router;