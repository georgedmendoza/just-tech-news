const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
// Now all of the routes defined in comment-routes.js will have a /comments prefix. 
router.use('/comments', commentRoutes);

module.exports = router;
