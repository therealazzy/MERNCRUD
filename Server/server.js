require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const worksRoutes = require('./routes/works')
const userRoutes = require('./routes/user')

//express app
const app = express()


//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/works', worksRoutes)
app.use('/api/user', userRoutes)

//Db connection
mongoose.connect(process.env.MONGO_URI)
    .then(() =>{
        //listen
        app.listen(process.env.PORT, () =>{
        console.log('connection successful and listening on port 4000')
        })
    })
    .catch(err =>{
        console.error(err)
    })
































































































































































































































    





















    





















    





















    





















    





















    





















    





















    





















    





















    





















    





















    





















    





















    





















    





















    





















    





















    





















    





















    





















    





















    





















    





















    





















    






