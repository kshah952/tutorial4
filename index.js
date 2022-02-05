var mongoose = require('mongoose')
var express = require('express');
var route = require('./routes')
var bodyParser = require('body-parser')
mongoose.connect('mongodb://127.0.0.1:27017/Products').then(()=>  //Products database
{
    console.log("DB Connected...")
    var app = express();
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(route);  //url
    app.listen(3000,()=>{
    console.log("Server started")
    })
}).catch((e)=>{
    console.log("error")
});