import express from 'express'
import dotenv, { config } from 'dotenv'
import { loggerDev } from './utils/loggerDev.js';
import { loggerProd } from './utils/loggerProd.js';
const app=express()
dotenv.config()
app
    .use(express.json())
    .use(express.urlencoded({extended:true}))
    .use(process.env.NODE_ENV === 'production' ? loggerProd : loggerDev)
   // .use(loggerDev)
    
    .get('/loggerTest',(req,res)=>{
        req.logger.fatal("level fatal")
        req.logger.warning("level warning")
        req.logger.info("level info")
        req.logger.http("level http")
        req.logger.debug("level debug")
        
        res.send({message:"logger probado"})
    })
  
    .listen(8080,()=>{console.log("server ok, por 8080");})