const express = require("express");
const router = express.Router();
const controllers = require("../controllers")

router.get('/', (req, res) => {
    console.log('hello from api')
    res.send('hola from api')
});
//router.get('/profile', (req, res) => res.send('hola from api'));
router.get('/user', (req, res) => {
    controllers.api.getUser(req, res);
});

module.exports = router;