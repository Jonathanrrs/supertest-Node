const {Router} = require('express');
const router = Router();

/* get all users */

router.get('/', (req,res) => {
    return res.json('all users sent');
});

router.get('/id', (req,res) => {
    if(req.params.id === 'U0001') {
        return res.json('User fouund');
    }
    return res.status(404).json('User not found');
});

/* add user */

router.post('/', (req,res) => {
    const {username, password} = req.body;
    if(username && password) {
        res.status(201).json('user created')
    }
    res.status(400).json('user not created')
})

module.exports = router;