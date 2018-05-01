exports.up = function(knex, Promise) {
  console.log('Up')
  return Promise.all([
    knex.schema.table("milestones", function(table) {
      table
        .integer("famous_person_id")
        .references("famous_people.id")
    })
  ]);
};

exports.down = function(knex, Promise) {
  console.log('Down')
  return Promise.all([
    knex.schema.table("milestones", function(table) {
      table.dropColumn("famous_person_id");
    })
  ]);
};
