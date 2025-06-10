const express = require('express')
const app = express()
const port = 4000
const db = require('./config/db')

app.use(express.json())
const ProjectRouter = require('./routes/project')
app.use('/api/projects',ProjectRouter )

app.get('/',(req,res)=>{
    res.send('welcome to home page')
    console.log('Server is running')
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})