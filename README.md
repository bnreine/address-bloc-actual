# address-bloc-actual


This is an address book command line application built using Express, Node, Sequelize, PostgreSQL, and Inquirer.  First fork and clone the application to your local machine.  Set up your postgreSQL database name to match the database name in the config file (db/config/config.json).  Run the migrations using the sequelize CLI.  Then type node index.js to run the application in your shell.  You can add contacts, see a list of all contacts, search for existing contacts, and delete contacts.   










******************Internal Notes********************************************

//Need to type "set" instead of "export" in scripts/tests in package.json file for windows

//To start database, type the following in the root directory of the project folder
pg_ctl -D C:/PostgreSQL/data/pg10 start

//port 5432 for database listening

//Needed to change db/models/index.js file (apparently there's a bug in sequelize for
windows user like myself):

//db/models/index.js
//var config = require(__dirname + '/../config/config.json')["test"]

//Running migration files on test environment
sequelize db:migrate --env test
