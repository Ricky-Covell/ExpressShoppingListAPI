const express = require("express")
const app = express()
const itemRoutes = require('./routes/items')
const ExpressError = require('./classes/expressError')

app.use(express.json());


// // // // // // // // // ROUTING // // // // // // // // // // // 
app.use('/items', itemRoutes);


// // // // // // // // ERROR HANDLING // // // // // // // // // 
app.use((req, res, next) => {
    return new ExpressError('Not Found', 404);
});


app.use((err, req, res ,next) => {
    res.status(err.status || 500);

    return res.json({
        error: err.message,
    })
})


// // // // // // // // // LISTENERS // // // // // // // // //
app.listen(3000, () => {
    console.log('App Running On Port: 3000')
})

module.exports = app