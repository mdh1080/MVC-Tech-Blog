const apiRoutes = require('./api');

const router = require('express').Router();

const dashboardRoutes = require('./dashboardRoutes');

router.use('/controller', dashboardRoutes);

router.use('/api', apiRoutes);

module.exports = router;