
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        { id: 1, num: 1, question: 'Given the choice of anyone in the world, whom would you want as a dinner guest?' },
        { id: 2, num: 2, question: 'Would you like to be famous? In what way?' },
        { id: 3, num: 3, question: 'Before making a telephone call, do you ever rehearse what you are going to say? Why?' },
        { id: 4, num: 4, question: 'What would constitute a “perfect” day for you?' },
        { id: 5, num: 5, question: 'When did you last sing to yourself ? To someone else?' },
        { id: 6, num: 6, question: 'If you were able to live to the age of 90 and retain either the mind or body of a 30 - year - old for the last 60 years of your life, which would you want ?' },
        { id: 7, num: 7, question: 'Do you have a secret hunch about how you will die ?' },
        { id: 8, num: 8, question: 'Name three things you and your partner appear to have in common.' },
        { id: 9, num: 9, question: 'For what in your life do you feel most grateful?' },
        { id: 10, num: 10, question: 'If you could change anything about the way you were raised, what would it be?' },
        { id: 11, num: 11, question: 'Take four minutes and tell your partner your life story in as much detail as possible.' },
        { id: 12, num: 12, question: 'If you could wake up tomorrow having gained any one quality or ability, what would it be?' },
        { id: 13, num: 13, question: 'If a crystal ball could tell you the truth about yourself, your life, the future or anything else, what would you want to know?' },
        { id: 14, num: 14, question: 'Is there something that you’ve dreamed of doing for a long time? Why haven’t you done it?' },
        { id: 15, num: 15, question: 'What is the greatest accomplishment of your life ?' },
        { id: 16, num: 16, question: 'What do you value most in a friendship?' },
        { id: 17, num: 17, question: 'What is your most treasured memory?' },
        { id: 18, num: 18, question: 'What is your most terrible memory?' },
        { id: 19, num: 19, question: 'If you knew that in one year you would die suddenly, would you change anything about the way you are now living ? Why ?' },
        { id: 20, num: 20, question: 'What does friendship mean to you ?' },
        { id: 21, num: 21, question: 'What roles do love and affection play in your life ?' },
        { id: 22, num: 22, question: 'Alternate sharing something you consider a positive characteristic of your partner.Share a total of five items.' },
        { id: 23, num: 23, question: 'How close and warm is your family ? Do you feel your childhood was happier than most other people’s ?' },
        { id: 24, num: 24, question: 'How do you feel about your relationship with your mother?' },
        { id: 25, num: 25, question: 'Make three true “we” statements each. For instance, “We are both in this room feeling ... “' },
        { id: 26, num: 26, question: 'Complete this sentence: “I wish I had someone with whom I could share ... “' },
        { id: 27, num: 27, question: 'If you were going to become a close friend with your partner, please share what would be important for him or her to know.' },
        { id: 28, num: 28, question: 'Tell your partner what you like about them; be very honest this time, saying things that you might not say to someone you’ve just met.' },
        { id: 29, num: 29, question: 'Share with your partner an embarrassing moment in your life.' },
        { id: 30, num: 30, question: 'When did you last cry in front of another person ? By yourself ?' },
        { id: 31, num: 31, question: 'Tell your partner something that you like about them already.' },
        { id: 32, num: 32, question: 'What, if anything, is too serious to be joked about ?' },
        { id: 33, num: 33, question: 'If you were to die this evening with no opportunity to communicate with anyone, what would you most regret not having told someone ? Why haven’t you told them yet ?' },
        { id: 34, num: 34, question: 'Your house, containing everything you own, catches fire. After saving your loved ones and pets, you have time to safely make a final dash to save any one item. What would it be? Why?' },
        { id: 35, num: 35, question: 'Of all the people in your family, whose death would you find most disturbing ? Why ?' },
        { id: 36, num: 36, question: 'Share a personal problem and ask your partner’s advice on how he or she might handle it.Also, ask your partner to reflect back to you how you seem to be feeling about the problem you have chosen.' }
      ]);
    }).then(() => {
      return knex.raw(
        "SELECT setval('questions_id_seq', (SELECT MAX(id) FROM questions));"
      );
    });
};


