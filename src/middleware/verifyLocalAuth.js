const jwt = require('jsonwebtoken');
const sessionController  = require('../sessions/SessionsController');

module.exports = async function (req, res, next){



    // Cookies that have not been signed
    //console.log('Cookies: ', req.cookies)

    // Cookies that have been signed
   console.log('cookie: ', req.cookies['sessionId'])

    //verify if we have a opened session
     if(req.cookies['sessionId'] !== undefined){
        const session = await sessionController.getSessionsActiveBySID(req.cookies['sessionId'])
        console.log('active session', session)
        if (session){
            req.user = session.user_id
            req.data = session.data
            console.log('req.user', req.user)
            next()
        }else{
            res.redirect('/session-terminated') 
        }
    
        
    } else{

        res.redirect('/login') 
    } 

   

   
}