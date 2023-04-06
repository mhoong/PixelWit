import express  from "express";
import * as dotenv from 'dotenv'
import cors from 'cors'

import connectDB from "./mongodb/connect";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', async (req, res) => {
    res.send("Hi, I'm PixelWit")
})

const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8000, () => console.log('Server is running on port http://localhost:8000'))
    } catch (error) {
        console.log(error)
    }

}

startServer(); 