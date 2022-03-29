require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./config/database')
const Router = require('./routes/routes')
const passport = require('passport')
// const PORT = 4000
const app = express();
const path = require('path');


//middleware

app.use(cors())
app.use(express.json());
app.use(passport.initialize())
app.use('/api', Router)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'))
  });
}


app.listen( process.env.PORT || 4000, process.env.HOST || '0.0.0.0', ()=>console.log(`Server Ready on PORT + ${process.env.PORT || 4000}`))



