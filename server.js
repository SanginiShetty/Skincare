import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'
import cors from 'cors';

//configure env
dotenv.config()

//database confige
connectDB();

//rest object
const app = express()

//middlewares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth', authRoutes)
//rest api
app.get('/', (req,res) => {
    res.send({
        message: '<h1>Welcome to Skin Serenity</h1>'
    })
})

//PORT
const PORT = process.env.PORT || 8080;

//run 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})