const express = require('express')
const cors = require('cors')
const compression = require('compression');
const path = require('path');
var dotenv = require('dotenv');
var session = require('express-session')
var cookieParser = require('cookie-parser')

var usersRoute = require('./routes/users/usersRoute');
var projectsRoute = require('./routes/projects/ProjectsRoute')
var authRoute = require('./routes/auth/AuthRoute')

dotenv.config()

const app = express()



app.use('/static', express.static(__dirname + '/public'));

// Add middleware for parsing URL encoded bodies (which are usually sent by browser)
app.use(cors({credentials:true}));

// Compress all HTTP responses
app.use(compression());

// Add middleware for parsing JSON and urlencoded data and populating `req.body`
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cookieParser())

// set the view engine to ejs
app.disable('view cache');
app.set('etag', false);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
console.log(__dirname)



/* //session
const sessionConfig = {
    secret:"ststrfgaysxsf", 
    resave:false, 
    saveUninitialized:true
}
app.use(session(sessionConfig))
 */

//not found
/* app.use((error, req, res, next)=>{
    const error = new Error('Not Found')
    error.status = 404
    next(error)
}) */

//catch errors middleware
app.use((error,req,res,next)=>{
    res.status(error.status || 500)
    res.json({ error: error.message})
})

//application router



app.use('/', require('./views/pagesRouter'))

// index page 
/* app.get('/', function(req, res) {
  res.status(200).send(
    {client:'BIG BOX',
    operator:'PRICEPOINT',
    status:'SUCESSO'
})
}); */

// about page 
/* app.get('/about', function(req, res) {
  var page = {title:'ABOUT'}
  res.render('pages/about',{page:page});
}); */

//ROTAS DO APLICATIVO
/* app.get('/gestao-precos', async function(req, res) {
  var page = await appController.page()
  console.log('a pgina é...')
  console.log(JSON.stringify(page))
  res.render('pages/gestao-precos',{page:page});
}); */


//ROTAS DA API

app.use('/api/v1/users', usersRoute);
app.use('/api/v1/projects', projectsRoute);
app.use('/api/v1/auth', authRoute);




app.listen(3333, ()=> console.log('Server is running on port: 3333 >>', app.get('env')))