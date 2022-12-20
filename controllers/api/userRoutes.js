const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const result = await User.create(req.body)
        res.json(result)
    }
    catch (error) {
        res.json(error);
    }
});
router.get('/', async (req, res) => {
    try {
        const result = await User.findAll()
        res.json(result)
    }
    catch (error) {
        res.json(error);
    }
});

router.put('/', async (req, res) => {
    try {
        const result = await User.update(req.body, {
            where: {
                id: req.body.id
                } 
                })
        res.json(result)
    }
    catch (error) {
        res.json(error);
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const result = await User.destroy({
            where: {
                id: req.params.id
                } 
                })
        res.json(result)
    }
    catch (error) {
        res.json(error);
    }
});

module.exports = router;
