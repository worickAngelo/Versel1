const express = require('express');
const res = require('express/lib/response');
const app = express();
const path = require('path');


const indexRoute = require('./routes/index');

//settings
app.set('port', 4000)
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//middlewares


//routes (carpeta routes)
app.use(require('./routes/index'));

//static files 
app.use(express.static(path.join(__dirname, 'public')))

//listenig the server
app.listen(app.get('port'), () => {
   console.log('server on port ', app.get('port'));
});