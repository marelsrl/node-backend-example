/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex => knex.schema.createTable('api_sessions',t => {
    t.increments('id')
    t.text('sid').unique()
    t.text('token')
    t.integer('user_id')
    t.integer('expires_in')
    t.boolean('active').defaultTo(false)
    t.json('cookie')
    t.json('data')
    t.timestamp('created_at').defaultTo(knex.fn.now())
    t.timestamp('updated_at').defaultTo(knex.fn.now())
  })


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable('api_sessions')

