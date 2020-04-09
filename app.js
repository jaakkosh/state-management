'use strict';


const express = require('express');
const app = express();
const port = 3000;
const username = 'foo';
const password = 'bar';

/*
const setCookieRoute = require('./routes/setCookieRoute');
*/

app.set('views', './views');
app.set('view engine', 'pug');
app.get('/setCookie', (req, res)=>{
console.log(req.params);
  const url='s';
  res.cookie('color',url , { path: '/setCookie' }).send('joo')
});

app.get('/form', (req, res)=>{
  res.render('form');
});
app.get('/secret', (req, res)=>{
  res.render('secret');
});

app.get('/deleteCookie', (req, res)=>{
res.clearCookie('color',{ path: '/setCookie' }).send('poisto')
});

app.get('/', (req, res) => {
  res.cookie('name', 'express').send('cookie set');
  res.render('home');
});
app.post('/login', (req, res) => {
 /* console.log(JSON.stringify(req.body));*/
  res.redirect('/secret');


/*
  if(username.equals(res.username)&&password.equals(res.password)){
    res.redirect('/');
  }
  else{
    console.log('wrong pass')
  }

*/




});
/*app.use('/setCookie', setCookieRoute);//*/

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
