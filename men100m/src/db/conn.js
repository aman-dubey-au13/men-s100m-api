const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://amandubey:aman123@@cluster0.fxilk.mongodb.net/REST_API?retryWrites=true&w=majority" , { 
useCreateIndex:true,
useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false,})
.then((res)=>console.log('Connected...'))
.catch(err=>console.log("NotConnected..."))