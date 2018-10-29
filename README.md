# address-bloc-actual


//Need to type "set" instead of "export" in scripts/tests in package.json file

//To start database, type the following in the root directory of the project folder
pg_ctl -D C:/PostgreSQL/data/pg10 start


//port 5432 for database listening


//Needed to change db/models/index.js file (apparently there's a bug in sequelize for
windows user like myself):

*******************************
Instead of relying on process.env.NODE_ENV to populate an env variable and using that variable (whose value should be "test", and apparently is, but for some reason it's giving us problems), try hardcoding the value "test":

**db/models/index.js**
`var config = require(__dirname + '/../config/config.json')["test"];`
******************************************
