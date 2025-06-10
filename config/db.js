const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()
const url = process.env.URL

mongoose.connect(url)
let db =mongoose.connection
db.on('connected',()=>{
    console.log('connected to database')
})
db.on('error',()=>{
    console.log('error while connected to database',err)
})
db.on('disconnected',()=>{
    console.log('disconnected from database')
})