import path from 'path';
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';

import { router } from './routes/index';

export const app = express();

// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router);

mongoose.connect('mongodb://localhost:27017/DB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err:any) => console.error(`Couldn't connect to database: ${err}`,err));

const db = mongoose.connection;
