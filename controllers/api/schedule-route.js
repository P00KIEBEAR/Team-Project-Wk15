const router = require('express').Router();
const { Appointment, Timeblock, User } = require('../../models');
//routes will use /api/schedule/ {route}

router.post('/', async (req, res) => {
  const { time, date, day, text, type, user_id } = req.body;
  const appt = await Appointment.create({
    Appointments_time: time,
    Appointments_date: date,
    Appointments_day: day, 
    Appointments_text: text,
    Appointments_type: type,
    user_id,
  });
  res.json(appt);
});

router.put('/', async (req, res) => {
  //put route code here
  res.send("this Schedule route was successful (put)");
});

//renders main scheduling page
router.get('/', async (req, res) => {
  res.render('scheduling');
});


router.get('/all', async (req, res) => {
  const appointments = await Appointment.findAll({
    include: [{
      model: User
    }]
  })
  res.json(appointments)
});

router.get("/:user", async (req, res) => {
  const { user } = req.params;
  const { id } = await User.findOne({
    where: {
      username: user
    }
  })
  const appointments = await Appointment.findAll({
    where: {
      user_id: id
    }
  })
})

router.delete('/', async (req, res) => {
  //delete route code here
  res.send("this Schedule route was successful (delete)");

});

module.exports = router;