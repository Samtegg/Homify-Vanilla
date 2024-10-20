import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import cors from 'cors';

const app = express();

const port = 3000;

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.post('/api/register', async(req, res) => {
    const bodyParams = req.body
    res.json({message: 'Data received Successfully', data: bodyParams})
    console.log(bodyParams);
    
})



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})



