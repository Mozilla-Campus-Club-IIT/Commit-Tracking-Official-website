const express = require('express');
const app = express();
//import for auto reloading of the browser
const morgan = require('morgan');
//import for body parsing 
const bodyParser = require('body-parser');
//for auto reloading of the browser
app.use(morgan('dev'));
//for body parsing 
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(bodyParser.json());

//===================== Adding access controll headers =====================
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
//============================================================================

//============================= HANDLING ROUTES ==============================

//imporing the routes
const productRoutes=require('./api/routes/products');
const topthreeRoutes=require('./api/routes/topthree');
const leaderboardRoutes=require('./api/routes/leaderboard');

//routes that will handle requests
app.use('/products',productRoutes);
app.use('/topthree',topthreeRoutes);
app.use('/leaderboard',leaderboardRoutes);

//=======================================================================

//=================================== For error handling ===================================
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});
//=============================================================================================
 
module.exports = app;