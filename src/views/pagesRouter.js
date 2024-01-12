var express = require('express')
var auth = require('../routes/auth/AuthController')
var verifyLogin = require('../middleware/verifyLocalAuth');
const sessionController = require('../sessions/SessionsController');
const cartController = require('../viewsControllers/cartController');

const crypto = require('crypto');

const router = express.Router();

const SESSIONS = new Map()

console.log('router ', __dirname)

router.get('/', function(req, res) {
    var page = {title:'INDEX'}
    res.render('pages/index',page);
})

router.get('/login', function(req, res) {
    
    var page = {title:'LOGIN', content:'login', message:[]}
    res.render('templates/pageTemplate', page);
})

router.post('/login', async function(req, res) {
    /* const redirect = req.beforeLoginUrl || '/'
    console.log('redirect ', redirect)
    
    const session = await sessionController.generateSession(req,res)
    console.log('no login token', session.token)
    req.headers['X-Auth-Token'] = session.token
    console.log('no login req headers', req.headers)
    res.redirect('/dashboard') */

     //verify user and password data
     const {user , token} = await auth.localLogin(req, res)

     if (user == null){
        res.sendStatus(401)
        return
     }

     const sessionId = crypto.randomUUID()

     const row = {
        sid: sessionId,
        user_id:user.id,
        //expires_in:'',
        active:true,
    }

    const sessionObject = await sessionController.insert(row)
    console.log('Session Object on Database >', sessionObject)   
     
    
     res
     .cookie("sessionId", sessionId,{
        secure:true,
        httpOnly:true,
        sameSite:"none"
     })
     .redirect('/dashboard')


    
})

router.get('/logout', verifyLogin , async function(req, res) {

    const cookie = req.cookies['sessionId']
    const user = req.user

    console.log('no logout ', user)

    const logoutMessage = await sessionController.closeSession(cookie, user)
    
    var page = {title:'LOGOUT', content:'logout', message:logoutMessage}
    res.render('templates/pageTemplate', page);
})

router.get('/dashboard', verifyLogin,  function(req, res) {
    var page = {title:'DASHBOARD', content:'dashboard', user:req.user}
    res.render('templates/appTemplate', page);
})

router.get('/clients', verifyLogin,  function(req, res) {
    var page = {title:'CLIENTS', content:'clients'}
    res.render('templates/appTemplate', page);
})

router.get('/products', verifyLogin,  function(req, res) {
    var page = {title:'PRODUCTS', content:'products'}
    res.render('templates/appTemplate', page);
})

router.get('/users', verifyLogin,  function(req, res) {
    var page = {title:'USERS', content:'users'}
    res.render('templates/appTemplate', page);
})

router.get('/cart', verifyLogin,  function(req, res) {
    const {products, prices} = cartController
   
    //console.log(products)
    var page = {title:'CART', 
                content:'cart', 
                products:Array.from(products),
                prices:Array.from(prices),
                user:req.user
            }
    res.render('templates/appTemplate', page);
})

router.get('/cart2', verifyLogin,  function(req, res) {
    const {products, prices} = cartController
   
    //console.log(products)
    var page = {title:'CART2', 
                content:'cart2', 
                products:Array.from(products),
                prices:Array.from(prices),
                user:req.user
            }
    res.render('templates/cashierTemplate', page);
})






//system pages

router.get('/session-terminated', async function(req, res) {

    var page = {title:'SYSTEM', content:'sessionTerminatedByServer'}
    res.render('templates/systemTemplate', page);
})

module.exports = router