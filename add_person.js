const settings = require("./settings"); // settings.json

var knex = require("knex")({
  client: "pg",
  connection: settings
});

[, , firstname, lastname, birthday] = process.argv;

knex("famous_people")
  .insert({
    first_name: firstname,
    last_name: lastname,
    birthdate: birthday
  })
  .then(row => {
    console.log(row);
    process.exit(1);
  })
  .catch(e => {
    console.log(e);
    process.exit(1);
  });
