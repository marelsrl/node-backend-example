/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex => knex.schema.alterTable('users',t => {
    
    t.timestamp('deleted_at')
   
  })


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down  = knex => knex.schema.alterTable('users',t => {
    
    t.dropColumn('deleted_at')
   
  })