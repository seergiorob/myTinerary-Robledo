require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./config/database')
const Router = require('./routes/routes')

const PORT = 4000

const app = express()

//middleware

app.use(cors())
app.use(express.json());
app.use('/api', Router)



app.listen(PORT, ()=>console.log('Server Ready on PORT '+PORT))



