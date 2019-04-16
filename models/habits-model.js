const db = require('../database/dbConfig');

module.exports = {
    addHabit,
};

function addHabit(habit) {
    return db('habitss')
    .insert(habit)
}
