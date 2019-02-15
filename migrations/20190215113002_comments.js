exports.up = function (knex, Promise) {
    return knex.schema.createTable('comments', table => {
        table.increments('id')
        table.text('subject').notNullable().defaultsTo('')
        table.text('comment').notNullable().defaultsTo('')
        table.integer('user_id').notNullable().defaultsTo(0).notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .index();
        table.integer('question_id').notNullable().defaultsTo(0)
            .notNullable()
            .references('id')
            .inTable('questions')
            .onDelete('CASCADE')
            .index();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('comments')
};

