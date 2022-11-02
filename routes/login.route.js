const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login.controller');

router.post('/post', async function(req, res, next){
    try{
        await loginController.checkAccount(req, res);
    }catch (err){
        console.error('Error: ', err.message);
        next(err);
    }
});

module.exports = router;