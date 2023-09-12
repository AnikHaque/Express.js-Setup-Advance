const express = require('express');
const router = require('./src/Routes/api');
const app = new express();

//app security middleware import
const rateLimit  = require('express-rate-limit')
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize')
const hpp = require('hpp')
const cors = require('cors')


//app security middleware implement 

app.use(helmet());
app.use(mongoSanitize());
app.use(hpp())
app.use(cors())
app.use('/api/v1',router)

//undefined route
app.use('*' , (req , res)=>{
    res.status(404).json({status: "Fail" , data : "Not Found"})
})
module.exports = app ;