
exports.up = function (knex, Promise) {
    return knex.schema.createTable('questions', table => {
        table.increments()
        table.integer('num').notNullable().defaultsTo(0)
        table.string('question').notNullable().defaultsTo('')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('questions')
};
