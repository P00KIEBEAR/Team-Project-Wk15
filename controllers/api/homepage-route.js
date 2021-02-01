const router = require('express').Router();
const { Appointment, Timeblock, User } = require('../../models');



router.get('/', (req, res) => {

  let username = req.session.username
  Appointment.findAll({
    // where: {
    //   user_id: req.session.user_id,
    // },
    include:
    {
      model: User,
      attributes: ['username'
        , 'id',]
    }, Timeblock,


  })
    .then(appointments => {
      if (appointments) {
        const appts = appointments.map(appointment =>
          appointment.get({ plain: true }));
        console.log(username)
        res.render('homepage', {
          username,
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