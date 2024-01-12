const apiSessions = require('../api_sessions/ApiSessionsController')

const jwt = require('jsonwebtoken');

module.exports = async function (req, res, next){

    const token = req.header('X-Auth-Token');

    if(!token) return res.status(401).send('Access Denied')

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        
        const sessionData = await apiSessions.verifyApiSession(verified.sid)

        if(!sessionData) return res.status(400).send('Session Closed Invalid Token')
        
        req.session = sessionData.session
        req.user = sessionData.user

        console.log('verify header session', req.session)
        console.log('verify header user', req.user)
        next()

    } catch (error) {
        res.status(400).send('Invalid Token')
    }

}