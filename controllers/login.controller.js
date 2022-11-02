async function checkAccount(req, res){
    res.send('Email: ' + req.body.email + 
    'Password: ' + req.body.pass);
}

module.exports = {
    checkAccount
};