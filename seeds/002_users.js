
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, name: 'Stephanie Jones', email: 'StephanieRuthJones@gmail.com' },
      ]);
    }).then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
};