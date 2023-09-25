if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}


const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const indexRouter=require('./routes/index') // where my route is and how i got to get
app.set('view engine','ejs'); // ejs view engine
app.set('views',__dirname + '/views');// where are views are 
app.set('layout','layouts/layout')
app.use(expressLayouts) // app to intiate out layouts for app
app.use(express.static('public')) // public file to store our files 

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)
const db=mongoose.connection
db.on('error',err =>(console.log(err)))
db.once('open',()=>{console.log('connected to database')})
app.use('/',indexRouter); //

app.listen(process.env.PORT || 3000, ()=>{
    
})