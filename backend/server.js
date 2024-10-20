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
    try {
        const {name, email, phone, password, role} = req.body
        const resut = await db.query("INSERT INTO users(name, email, phone, password, role ) VALUES($1, $2, $3, $4, $5)", [name, email, phone, password, role]);
        res.json({message: 'Data received Successfully', data: req.body})
        
    } catch (error) {
        console.error('Error inserting data', error);
        res.status(500).json({message: 'Error saving data', error: error.message})
    }
   
    
})



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})



