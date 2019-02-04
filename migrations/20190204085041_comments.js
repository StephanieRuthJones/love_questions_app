
exports.up = function (knex, Promise) {
    return knex.schema.createTable('comments', table => {
        table.increments()
        table.text('subject').notNullable().defaultsTo('')
        table.text('comment').notNullable().defaultsTo('')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('comments')
};
