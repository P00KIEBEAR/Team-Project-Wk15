const router = require('express').Router();
const { Appointment, Timeblock, User } = require('../../models');

router.get('/', async (req, res) => {
  try {
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
      }).then(appointments =>
        appointments?.map(appointment =>
          appointment.get({ plain: true })
        )
      )


    // console.log(appointments)

    res.render('homepage', {
        appointments,
        loggedIn: true,
      });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
