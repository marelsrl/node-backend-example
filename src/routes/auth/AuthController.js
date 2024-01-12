
const uuid = require('uuid')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const knex = require('../../database')
const validations = require('../../utils/validations')
const apiSessions = require('../../api_sessions/ApiSessionsController')





module.exports = {

    async index (req,res, next) {
        const str = 'auth route index'
        try {
            res.send(str)
        } catch (error) {
            next(error)
        }
    },

    async register (req, res, next){

        

        //lets validate the data before create a user

        const {error} = validations.registerValidation(req.body)

        if (error) return res.status(400).send(error.details[0].message)

        //check if the user is already in the database

        const [user] = await knex('users').where({email:req.body.email})
        console.log(user)
        if (user) return res.status(400).send('Email already exists...')

        //hash password

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        
        
        const newUser = {
            first_name: req.body.name,
            username:uuid.v4(),
            email: req.body.email,
            pwd_hash: hashPassword
        }
        try {

            await knex('users').insert( { ...newUser} )
            
            delete newUser.pwd_hash
            delete newUser.pwd_recovery

            return res.status(201).send({ ...newUser})
            
        } catch (error) {
            
            next(error)
        }
    }, 

    async localLogin(req,res){

        error = {}

        try {
        // validate mail and password
        const {error} = validations.loginValidation(req.body)

        if (error) return error.message="erro no body"

        //check if the user is already in the database

        const [user] = await knex('users').where({email:req.body.email})
        console.log(user)
        if (!user) return error.message= 'Email or password is wrong...'

        //check password
        const validPass = await bcrypt.compare(req.body.password, user.pwd_hash)
        if (!validPass) return message.text= 'Email or password is wrong...'

        console.log('user logged in')

        // create and sign a token
        const token = jwt.sign({id:user.id}, process.env.TOKEN_SECRET)
        
        return {error, user, token}
       

        
            
        } catch (err) {
            console.log(err)
            return error.message = 'desastre > ' + err
        }
    },

    async login(req, res, next){
        
        console.debug('login req', req.body)
        // validate mail and password
        const {error} = validations.loginValidation(req.body)

        if (error) return res.status(400).send(error.details[0].message)

        //check if the user is already in the database

        const [user] = await knex('users').where({email:req.body.email})
        console.log(user)
        if (!user) return res.status(400).send('Email or password is wrong...')

        //check password
        const validPass = await bcrypt.compare(req.body.password, user.pwd_hash)
        if (!validPass) return res.status(400).send('Email or password is wrong...')

        console.log('user logged in')

        //remove unnecessary fields

        delete user.pwd_hash
        delete user.pwd_recovery

        const apisession = await apiSessions.generateApiSession(user)

        // create and sign a token
        const token = jwt.sign({sid:apisession.sid}, process.env.TOKEN_SECRET)
        const data ={
            token:token,
            session:apisession,
            user:user
        }


        //res.header('X-Auth-Token', token)
        res.send(data)
       

        try {
            
        } catch (error) {
            next(error)
        }
    }
}