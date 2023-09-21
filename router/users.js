const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'users.html'));
});

router.post('/', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;