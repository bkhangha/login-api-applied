const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();

const registerRouter = require('./routes/register.route');
const loginRouter = require('./routes/login.route');

const PORT = 8080;

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

app.use("/", loginRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);

app.set('port', PORT);
app.listen(PORT, console.log(`Sever started on port ${PORT}`));