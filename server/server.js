import express from 'express';
import cors from 'cors';
import booksRoute from './routes/booksRoute.js';
import db from './config/db.js';
// const cloudinary = require('cloudinary').v2;

const app = express();
const Port = 9090;

// cloudinary.config({
//     cloud_name: 'dc0tnxira',
//     api_key: '193184153176651',
//     api_secret: 'D5Li9mzaMuDsb4e12qd9csD4fWs',
// });


app.use(cors());
app.use(express.json());
app.use('/api/books',booksRoute);
db();
app.listen(Port,()=> console.log(`server is listening on ${Port}`));