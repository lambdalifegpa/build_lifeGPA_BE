exports.up = function(knex, Promise) {
    return knex.schema.createTable('habitss', function(tbl) {
        tbl.increments(); // id
        tbl.string('habit') // habit name
          .notNullable()
        tbl.integer('user_id') // foreign key
            .notNullable()
            .references('id')
            .inTable('users')
        tbl.date('createdAt')
        tbl.date('lastCompleted')
        tbl.integer('count')
        tbl.timestamps(true,true)


    }) 
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('habitss');
};