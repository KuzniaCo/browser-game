import path  from 'path';
import express from 'express';
import morgan from 'morgan';

export const app = express();

import { router }  from './routes/index';

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public')));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router);


