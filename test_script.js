const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user: settings.user,
  password: settings.password,
  database: settings.database,
  host: settings.hostname,
  port: settings.port,
  ssl: settings.ssl
});

const query = `SELECT * FROM famous_people WHERE first_name = $1 OR last_name = $1`;

[, , name] = process.argv;

client.connect(err => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client
    .query(query, [name])
    .then(result => {
      console.log("Searching ...");
      console.log(
        `Found ${result.rows.length} person(s) by the name '${
          process.argv[2]
        }':`
      );
      for (const [index, row] of result.rows.entries()) {
        console.log(
          `- ${index + 1}: ${row.first_name} ${
            row.last_name
          }, born '${row.birthdate.toISOString().slice(0, 10)}'`
        );
      }
      process.exit(1);
    })
    .catch(err => {
      console.log(err);
      process.exit(1);
    });
});
