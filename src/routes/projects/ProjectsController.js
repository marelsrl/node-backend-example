const knex = require('../../database')

const table = "projects"

module.exports = {

    async index(req, res, next){
        
        try {

            const { user_id , page = 1} = req.query;

            const query = knex('projects')
            .limit(5)
            .offset((page-1) * 5)

            
            const countObj = knex('projects').count()

            if(user_id) {
                query
                .where({user_id})
                .join('users', 'users.id', '=', 'projects.user_id')
                .select('projects.*', 'users.username')

                countObj.where({user_id})

                
            }

            const [count] = await countObj
            
            console.log(count)

            res.header('X-Total-Count', count["count"])

            const results = await query


            return res.json(results)
            
        } catch (error) {
            next(error)
        }
    },

    async create(req, res, next){

        const {title, user_id } = req.body

        try {

            await knex(table).insert({
                title,
                user_id
            })

            return res.status(201).send()

        } catch (error) {
            
            next(error)
        }

        
    },

    async update(req, res, next){

        const { username } = req.body
        const { id } = req.params

        try {

            await knex('users').update({
                username
            }).where({id})

            return res.send()

        } catch (error) {
            
            next(error)
        }

        
    },

    async delete(req, res, next){

        const { id } = req.params

        try {

            await knex('users').where({id}).del()

            return res.send()

        } catch (error) {
            
            next(error)
        }

        
    }



}