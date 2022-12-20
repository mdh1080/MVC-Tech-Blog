const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const comments = req.body.comments;
        const newPost = await Post.create(req.body)
        res.json({newPost, comments})

    }
catch (err) {
    res.json (err)
}
});

router.get('/', async (req, res) => {
    try {
        const Posts = await Post.findAll()
        res.json({Posts})
    }
catch (err) {
    res.json (err)
}
});
router.put('/:id', async (req, res) => {
    try {
        const comments = req.body.comments;
        const newPost = await Post.update(req.body, {
            where: {
                id: req.params.id
                }
                })
        res.json({newPost, comments})

    }
catch (err) {
    res.json (err)
}
});
router.delete('/:id', async (req, res) => {
    try {
        const comments = req.body.comments;
        const newPost = await Post.destroy( {
            where: {
            id: req.params.id
            }
            })  
       
        res.json({newPost, comments})

    }
catch (err) {
    res.json (err)
}
});

module.exports = router;