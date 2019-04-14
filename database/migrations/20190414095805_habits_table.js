
exports.up = function(knex, Promise) {
    return knex.schema.createTable('habits', habits => {
        habits // habit_id
          .increments();

        habits // habit_name
          .string('habit')
          .notNullable()
      });  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('habits');
};
