import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import cors from "cors";
import pg from "pg"
import bcrypt from 'bcrypt';



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
    const saltRounds = 10
    try {
        const {name, email, phone, password, role} = req.body
        const emailCheck = await db.query("SELECT * FROM users WHERE email = $1", [email]);
        if(emailCheck.rows.length > 0){
            return res.json({message: 'Email exist', email: email})
        } else{
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            const result = await db.query("INSERT INTO users(name, email, phone, password, role ) VALUES($1, $2, $3, $4, $5) RETURNING *", [name, email, phone, hashedPassword, role]);

            return res.json({message: 'Success', data: result.rows[0]})
           
        }
       
        
    } catch (error) {
        console.error('Error inserting data', error);
        res.status(500).json({message: 'Error saving data', error: error.message})
    }
   
    
})

app.post('/api/signin', async(req, res)=> {
    
})



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})



