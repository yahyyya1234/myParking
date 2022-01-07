/**
 * My express variable
 * * nodejs testing project sample
 * ?should we use an other framework than express ?
 * !do not use body-parser
 * @param Tisha no param
 * todo mongodb
 */
var express = require('express');
var parkingRoute = require('./routes/parkingsController')
var reservationRoute = require('./routes/reservationsController')
var app = express()
const  database = require('./database/database')
/**
 ** middlewares 
 */

app.use(express.json())
app.use('/', parkingRoute);
app.use('/parkings', reservationRoute)

/**
 ** mongoDB connection
 *  */
database.connect()

app.listen(process.env.PORT || 4200, function (){
    console.log(`Listening mongo DB, and connected to 4200`);
});

