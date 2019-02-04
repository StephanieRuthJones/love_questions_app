
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        { subject: 'Questons', comment: 'I fell in love because of these questions.' },

      ]);
    });
};
