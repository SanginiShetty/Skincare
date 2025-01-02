import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db';

//configure env
dotenv.config()

//rest object
const app = express()

//rest api
app.get('/', (req,res) => {
    res.send({
        message: 'Welcome to Skin Serenity'
    })
})

//PORT
const PORT = process.env.PORT || 8080;

//run 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})