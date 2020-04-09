const cookieParser = require('cookie-parser');
app.use(cookieParser());

const cookie_list_get = (req, res) => {
    res.cookie('name', 'express').send('cookie set'); //Sets name = express
};