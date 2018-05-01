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
  .then(() => {
    process.exit(1);
  })
  .catch(e => {
    process.exit(1);
  });
