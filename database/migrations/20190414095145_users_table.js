
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', users => {
        users // user_id
          .increments();

        users // username
          .string('username', 128)
          .notNullable()
          .unique();
          
        users // password
          .string('password', 128)
          .notNullable();
      });  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
