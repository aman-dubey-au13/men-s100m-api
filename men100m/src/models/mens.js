const express = require('express')
const bcrypt = require('bcrypt')  
const mongoose = require('mongoose')    
const menSchema = mongoose.Schema({
    ranking : {
        type : Number,
        required :true,
        unique:true
    },
    name:{
        type:String,
        required :true,
        trim:true
    },
    dob:{
        type:String,
        required :true,
        trim:true
    },
    country:{
        type:String,
        required :true,
        trim:true
    },
    score:{
        type:String,
        required :true,
        trim:true
    },
    event:{
        type:String,
        default:"100m"
    }

})

menSchema.pre('save',async function(next){
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(this.name,salt)
        this.name = hashedPassword
        next()
    } catch (error) {
        next(error)
        
    }
})


const MenRanking = new mongoose.model("MenRanking",menSchema)

module.exports = MenRanking