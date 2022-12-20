const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create(req.body)
        res.json({newComment})

    }
catch (err) {
    res.json (err)
}
});

router.get('/', async (req, res) => {
    try {
        const Comments = await Comment.findAll()
        res.json({Comments})
    }
catch (err) {
    res.json (err)
}
});
router.put('/:id', async (req, res) => {
    try {
        const newComment = await Comment.update(req.body, {
            where: {
                id: req.params.id
                }
                })
        res.json({newComment})

    }
catch (err) {
    res.json (err)
}
});
router.delete('/:id', async (req, res) => {
    try {
        const newComment = await Comment.destroy( {
            where: {
            id: req.params.id
            }
            })  
       
        res.json({newComment})

    }
catch (err) {
    res.json (err)
}
});

module.exports = router;