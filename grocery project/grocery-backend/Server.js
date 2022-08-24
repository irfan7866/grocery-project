const express = require('express')
const app = express()
const PORT = 8765


const bodyParser = require('body-parser')

const db = require('./DB/db')
const cors = require('cors')

const myRoutes = require("./Routes/Routes")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))


const corsOptions = {
    origin:'http://localhost:3000',
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions));


app.use((req , res , next) => {
    res.setHeader('Access-Control-Allow-Origin' , '*');
    res.setHeader('Access-Control-Allow-Methods' , 'GET , POST , PUT , PATCH , DELETE');
    res.setHeader('Access-Control-Allow-Headers' , 'Content-Type , X-Requested-With , Accept , Origin , authorization');
    res.setHeader('Access-Control-Expose-Headers' , 'authorization');
    next();
});


app.use('/user' , myRoutes)


app.listen(PORT , () =>{
    console.log(`Server is running on PORT : ${PORT}`)
})