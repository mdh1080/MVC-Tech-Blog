const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const router = require('express').Router();

router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);


module.exports = router;
