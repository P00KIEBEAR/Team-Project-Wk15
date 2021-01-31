const router = require('express').Router();
<<<<<<< HEAD
const User = require('../../models/User');
=======
const { User } = require('../../models');
>>>>>>> main

//routes will use /api/SignUp/ {route}
router.get('/', async (req, res) => {
  //get route code here
  res.render('signup');
});

router.post('/', (req, res) => {
  console.log(req.body)
  User.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    firstname: req.body.firstname,
    lastname: req.body.lastname,


  })
    .then(dbUserData => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.email = dbUserData.email;
        req.session.firstname = dbUserData.firstname;
        req.session.lastname = dbUserData.lastname;
        req.session.loggedIn = true;

        res.json(dbUserData);

      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;