var express = require(  'express' )
const AuthController = require('./AuthController')

const verifySessionToken = require('../../middleware/verifyToken')


const router = express.Router()

router  
    .get('/', AuthController.index)
    .post('/register', AuthController.register)
    .post('/login', AuthController.login)
    .get('/posts', verifySessionToken , (req,res)=>{
        res.status(200).send(`rota liberada para o user ${JSON.stringify(req.user)}`)
    })


module.exports = router;