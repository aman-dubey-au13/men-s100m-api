const express = require('express')
require("../src/db/conn")
const MenRanking = require('../src/models/mens')
const router = require('./routers/men')
const app = express()
// require('dotenv').config()
const port = process.env.PORT || 3000
app.use(express.json())

// !important! 
// you need to install the following libraries |express|ejs|[dotenv > if required]
// or run this command >> npm i express ejs dotenv 

//   

app.use(router)

app.get('/' ,async (req , res)=>{

   res.send('hello from simple server :)')

})
app.post('/mens' , async(req , res)=>{
    try{
        const addingMensRecords = new MenRanking(req.body)
        console.log(req.body)
        const insertMens = await addingMensRecords.save();
        res.status(201).send(insertMens);
        

    } catch(e){
        res.status(400).send(e)

    }
})
app.get('/mens' , async(req , res)=>{
    try{
        const getMens = await MenRanking.find({}).sort({"ranking":1});
        res.status(200).send(getMens);
        

    } catch(e){
        res.status(400).send(e)

    }
})

app.get('/mens/:id' , async(req , res)=>{
    try{
        const _id = req.params.id
        const getMen = await MenRanking.findById({_id});
        res.send(getMen);
        

    } catch(e){
        res.status(400).send(e)

    }
})
app.patch('/mens/:id' , async(req , res)=>{
    try{
        const _id = req.params.id
        const getMen = await MenRanking.findByIdAndUpdate(_id,req.body,{new:true});
        res.send(getMen);
    } catch(e){
        res.status(400).send(e)

    }
})
app.delete('/mens/:id' , async(req , res)=>{
    try{
        // const _id = req.params.id
        const getMen = await MenRanking.findOneAndDelete(req.params.id);
        res.send(getMen);
    } catch(e){
        res.status(400).send(e)

    }
})
app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))