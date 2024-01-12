const knex = require('../database')
var auth = require('../routes/auth/AuthController')
const { v4: uuidv4 } = require('uuid');



    const list = async ()=>{
        const results = await knex('sessions')
        .where('active', true)
        console.log('Sessions: ' ,results)
        return results
    }

    const getSessionsActiveByUserID = async(uid)=>{
        const results = await knex('sessions')
        .where('user_id',uid)
        .where('active', true)
        //console.log('User ' + uid + ' active sessions > ' , results)
        return results[0]
    }

    const getSessionsActiveBySID = async(sid)=>{
        const results = await knex('sessions')
        .where('sid',sid)
        .where('active', true)
        //console.log('User ' + uid + ' active sessions > ' , results)
        
        return results[0]
    }

    const insert = async(session)=>{

        try {

           const result =  await knex('sessions').insert({
                ...session
            })
            .returning('*')

            return result

        } catch (error) {
            
            console.log(error)
        }

        
    }

    const update = async(updateObj)=>{

        
        const { id } = updateObj

        delete updateObj.id

        try {

            await knex('sessions').update({
                ...updateObj
            }).where({id})

           

        } catch (error) {
            
            console.log(error)
            
        }

        
    }

    const remove = async(id)=>{


        try {

            await knex('sessions')
                .where({id})
                .update('active',false)
                .update('updated_at', new Date())

            

        } catch (error) {
            
            console.log(error)
            
        }

        
    }

    const restore = async(id)=>{


        try {

            await knex('sessions')
                .where({id})
                .update('active',true)
                .update('updated_at', new Date())

            

        } catch (error) {
            
            console.log(error)
            
        }

        
    }

    const closeSession = async(cookie,user)=>{

       
        console.log('no closeSession ', user)

        try {

            await knex('sessions')
                .where({sid:cookie})
                .update('active',false)
                .update('updated_at', new Date())

            return  `Closed session for user` + user

        } catch (error) {
            
            console.log(error)
            
        }

    }

    const generateSession = async(req,res)=>{

            //verify user and password data
            const {user , token} = await auth.localLogin(req, res)
            console.log('localLogin user ', user.first_name)
            delete user.pwd_hash
            console.log('localLogin user ', user)

            /* //verify if we have a opened session
            const session = await getSessionsActiveByUserID(user.id)
            console.log('active session', session)

            if (session){
                req.session.user = session.data.user
                return req.session
            } */
                       
            
            console.log('req.session >', req.session)
            //console.log(req.session)
            //crete new row object

            //initiate a session with user data
            //req.session.user = user
            //req.session.save()

            const row = {
                sid: uuidv4(),
                user_id:user.id,
                //expires_in:'',
                active:true,
            }

                        
            //save new session to database
            
            const sessionObject = await insert(row)
            console.log('Session Object on Database >', sessionObject)    
            //return session object

            return {user , token, sessionObject}
    }

    module.exports = {
        generateSession, 
        getSessionsActiveBySID, 
        insert, 
        closeSession
    }
    


