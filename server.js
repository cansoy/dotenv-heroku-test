const express=require("express")
const server=express()
const dotenv=require("dotenv").config({path:"./.env"})
const PORT =process.env.PORT || 3000

server.set("view engine","ejs")
server.set("views","./views")

server.get("/",(req,res)=>{
    const testKey=process.env.TEST_KEY || "*****NOT-YET-EXIST*****"
    console.log(testKey)
    res.render("home",{testKey:testKey})
})

server.listen(PORT,()=>console.log("******************************************",PORT))