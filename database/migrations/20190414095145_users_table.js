
exports.up = function(knex, Promise) {
    return knex.schema

    // Users Table
    .createTable('users', users => {
        users // user_id
          .increments();

        users
            .string('first_name')
            // .notNullable();

        users
            .string('last_name')
            // .notNullable();
            
        users // username
          .string('username', 128)
          .notNullable()
          .unique();

        users // password
          .string('password', 128)
          .notNullable();
      })

};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('users');
};
