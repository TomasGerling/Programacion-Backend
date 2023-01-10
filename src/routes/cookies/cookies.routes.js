const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { name, value, time } = req.body;
    const config = {
        signed: true
    }
    if (!time) {
        return res.cookie(name, value, config).send(`Cookie ${name} set`);
    }
    if (isNaN(time) || time < 1) {
        return res.status(400).json({
            succes: false,
            message: 'Bad Cookie Time Format'
        });
    } config['maxAge'] = parseInt(time) * 1000;
    res.cookie(name, value, config).send(`Cookie ${name} set`)
});

router.get('/', (req, res) => {
    res.status(200).json(req.signedCookies)
})


router.delete('/:name', (req, res) => {
    const { name } = req.params;
    if (!Object.hasOwn(req.signedCookies, name)) {
        return res.status(400).json({
            success: false,
            message: `The cookie ${name} does not exist`
        })
    }
    res.clearCookie(name).send(`Cookie ${name} was deleted successfully`);
});


module.exports = router;