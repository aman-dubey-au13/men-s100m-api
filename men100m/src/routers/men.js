const router = require('express').Router()
const MenRanking  = require("../models/mens")
router.get('/' ,async (req , res)=>{

   res.send('hello from simple server :)')

})
router.post('/mens' , async(req , res)=>{
    try{
        const addingMensRecords = new MenRanking(req.body)
        console.log(req.body)
        const insertMens = await addingMensRecords.save();
        res.status(201).send(insertMens);
        

    } catch(e){
        res.status(400).send(e)

    }
})
router.get('/mens' , async(req , res)=>{
    try{
        const getMens = await MenRanking.find({}).sort({"ranking":1});
        res.status(200).send(getMens);
        

    } catch(e){
        res.status(400).send(e)

    }
})

router.get('/mens/:id' , async(req , res)=>{
    try{
        const _id = req.params.id
        const getMen = await MenRanking.findById({_id});
        res.send(getMen);
        

    } catch(e){
        res.status(400).send(e)

    }
})
router.patch('/mens/:id' , async(req , res)=>{
    try{
        const _id = req.params.id
        const getMen = await MenRanking.findByIdAndUpdate(_id,req.body,{new:true});
        res.send(getMen);
    } catch(e){
        res.status(400).send(e)

    }
})
router.delete('/mens/:id' , async(req , res)=>{
    try{
        // const _id = req.params.id
        const getMen = await MenRanking.findOneAndDelete(req.params.id);
        res.send(getMen);
    } catch(e){
        res.status(400).send(e)

    }
})


module.exports  = router
