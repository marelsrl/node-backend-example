const knex = require('../database')
const { v4: uuidv4 } = require('uuid');

const table = 'api_sessions'


    const list = async ()=>{
        const results = await knex(table)
        .where('active', true)
        console.log('Api Sessions: ', results)
        return results
    }

    const getApiSessionsActiveByUserID = async(uid)=>{
        const results = await knex(table)
        .where('user_id',uid)
        .where('active', true)
        //console.log('User ' + uid + ' active sessions > ' , results)
        return results[0]
    }

    const getApiSessionsActiveBySid = async(sid)=>{
        const results = await knex(table)
        .where('sid',sid)
        .where('active', true)
        //console.log('User ' + uid + ' active sessions > ' , results)
        
        return results[0]
    }

    const create = async(session)=>{

        try {

           const result =  await knex(table).insert({
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

        try 
        {
            await knex(table).update({...updateObj})
            .where({id})
        } 
        catch (error) {       
            console.log(error) 
        }
    }

    const closeApiSessionByToken = async(token)=>{


        try {

            await knex(table)
                .where({"token":token})
                .update('active',false)
                .update('updated_at', new Date())

        } catch (error) {  
            console.log(error)  
        }

        
    }

    const restore = async(id)=>{

        try {

            await knex(table)
                .where({id})
                .update('active',true)
                .update('updated_at', new Date())

        } catch (error) {
            
            console.log(error)
            
        }

        
    }

    const closeAllUserApiSessions = async(user)=>{

       
        console.log('no closeAllApiSessions ', user)

        try {

            await knex(table)
                .where({user_id:user})
                .update('active',false)
                .update('updated_at', new Date())

            return  `Closed all api_sessions for user` + user

        } catch (error) {
            
            console.log(error)
            
        }

    }

    const generateApiSession = async(user)=>{

           
            console.log('generateApiSession >>', user)

            //verify if we have a opened session
            const session = await getApiSessionsActiveByUserID(user.id)
            console.log('active session', session)

            if (session) return session
           
            //initiate a session with user data
            const sessionData = {
                sid: uuidv4(),
                user_id:user.id,
                //expires_in:'',
                active:true,
            }

                        
            //save new session to database
            
            const sessionObject = await create(sessionData)
            console.log('Session Object on Database >', sessionObject)    
            //return session object

            return {sessionObject}
    }

    const verifyApiSession = async(sid)=>{

        try {
            console.log('vai verificar', sid)

            const session = await knex(table)
            .where({sid:sid})
            .where({active:true})

            console.log('look for session', session)

            if(!session) return {}

            //get user data
            const user = await knex('users')
            .where({id:session[0].user_id})

            if (user) delete user.pwd_hash

            return{
                session:session,
                user:user
            }
            
        } catch (error) {

            console.log('verify session error', error)
            
        }
       
    }


    module.exports = {
        getApiSessionsActiveBySid,
        generateApiSession, 
        closeApiSessionByToken,
        verifyApiSession
    }
    


