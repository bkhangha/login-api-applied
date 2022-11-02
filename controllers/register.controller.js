async function createAccount(req, res){
    res.send('Full name: ' + req.body.fname + ' ' + req.body.lname + 
    '\n Email: ' + req.body.email + 
    '\n Password: ' + req.body.pass);
}

module.exports = {
    createAccount
};