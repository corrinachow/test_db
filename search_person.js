const settings = require("./settings"); // settings.json

var knex = require("knex")({
  client: "pg",
  connection: settings
});

function handleResult(rows) {
  console.log("Searching ...");
  console.log(
    `Found ${rows.length} person(s) by the name '${process.argv[2]}':`
  );
  for (const [index, row] of rows.entries()) {
    console.log(
      `- ${index + 1}: ${row.first_name} ${
        row.last_name
      }, born '${row.birthdate.toISOString().slice(0, 10)}'`
    );
  }
  process.exit(1);
}

knex("famous_people")
  .where({ first_name: process.argv[2] })
  .then(result => handleResult(result))
  .catch(err =>{
    console.log(err);
    process.exit(1);
  });
