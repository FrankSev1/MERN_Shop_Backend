import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

import productsRouter from './routers/products';
import categoryRouter from './routers/category';
import UserRouter from './routers/user';
import { createLanguageService } from 'typescript';

const app = express();
dotenv.config({ path: './.env' });
const api = process.env.API_URL;

app.use(express.json());
app.use(morgan('tiny'));

app.use(`${api}/product`, productsRouter);
app.use(`${api}/category`, categoryRouter);
app.use(`${api}/user`, UserRouter);

mongoose.connect(process.env.MONGO_CONNECT!,{
    dbName: process.env.DB_NAME
})
.then(() => {
    console.log("Database connection is ready...");
})
.catch((err)=>{
    console.log(err)
})

app.listen(process.env.PORT, () => {
    console.log(`The server was running in port  ${process.env.PORT}`)
})
