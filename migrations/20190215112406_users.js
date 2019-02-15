exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments('id')
        table.text('name').notNullable().defaultsTo('')
        table.text('email').notNullable().defaultsTo('')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('users')
};
