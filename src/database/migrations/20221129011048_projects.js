/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex => knex.schema.createTable('projects', t => {
    t.increments('id')
    t.text('title').unique().notNullable()

    //relacionamento
    t.integer('user_id')
        .references('users.id')
        .notNullable()
        .onDelete('CASCADE')


    t.timestamp('created_at').defaultTo(knex.fn.now())
    t.timestamp('updated_at').defaultTo(knex.fn.now())
  })


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable('projects')