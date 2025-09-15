import express, { urlencoded } from 'express'
import mysql from 'mysql2';
import pool from './config/database.js';
import tableRouter from './routes/tableroutes.js';
import cors from 'cors'
import uploadRouter from './routes/uploadroutes.js';
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

const port=7000

app.use("/tables",tableRouter)
app.use("/upload",uploadRouter)

app.listen(port,(req,res)=>{
    console.log("Server is running on port:",port)
})

