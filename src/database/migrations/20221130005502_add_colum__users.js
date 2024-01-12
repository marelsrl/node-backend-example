/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex => knex.schema.alterTable('users',t => {
    
    t.text('email')
    t.text('pwd_hash')
    t.text('pwd_recovery')
    t.text('first_name')
    t.text('last_name')
    t.text('active')
    t.timestamp('last_access_at')
   
  })


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down  = knex => knex.schema.alterTable('users',t => {
    
    t.dropColumn('email')
    t.dropColumn('pwd_hash')
    t.dropColumn('pwd_recovery')
    t.dropColumn('first_name')
    t.dropColumn('last_name')
    t.dropColumn('active')
    t.dropColumn('last_access_at')
   
  })