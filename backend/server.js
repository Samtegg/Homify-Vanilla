import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import cors from "cors";
import pg from "pg"



const app = express();

const port = 3000;

const db = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'homify',
    password: '1234',
    port: 5432
})

db.connect();


app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());




app.post('/api/register', async(req, res) => {
    const bodyParams = req.body

    const resut = await db.query()
    res.json({message: 'Data received Successfully', data: bodyParams})
    
    
})



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})



