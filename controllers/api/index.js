const router = require('express').Router();
const adminRoute = require('./admin-route');
const loginRoute = require('./login-route');
const scheduleRoute = require('./schedule-route');
const userRoute = require('./user-route');
const signupRoute = require('./signup-route');
const homepage = require("./homepage-route");

router.use('/signup', signupRoute);
router.use('/user', userRoute);
router.use('/admin', adminRoute);
router.use('/login', loginRoute);
router.use('/schedule', scheduleRoute);
router.use('/homepage', homepage);

module.exports = router;
