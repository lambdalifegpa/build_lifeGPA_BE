exports.up = function(knex, Promise) {
    return knex.schema.createTable('habitss', function(tbl) {
        tbl.increments(); // id
        tbl.string('habit') // habit name
          .notNullable()
        tbl.integer('user_id') // whatever
            .notNullable()
            .references('id')
            .inTable('users')
    }) 
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('habitss');
};