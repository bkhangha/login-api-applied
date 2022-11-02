const express = require('express');
const router = express.Router();
const registerController = require('../controllers/register.controller');

router.post('/post', async function(req, res, next){
    try{
        await registerController.createAccount(req, res);
    }catch (err){
        console.error('Error: ', err.message);
        next(err);
    }
});

module.exports = router;