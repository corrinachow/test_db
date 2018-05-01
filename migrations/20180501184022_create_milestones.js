exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("famous_people", function(table) {
      table.increments('id').primary();
      table.string('first_name');
      table.string('last_name');
      table.date('birthdate');
    }),
    knex.schema.createTable("milestones", function(table) {
    table.increments('id').primary();
    table.string("description");
    table.date("date_achieved");
  })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("famous_people"), knex.schema.dropTable("milestones")]);
};
