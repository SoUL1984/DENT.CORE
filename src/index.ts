import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';

import * as config from './configs/Configs/MainConfig';

// Базовый модуль
import * as IndexController from './Module/Common/Controller/IndexController';

// Модули
import { UserCtrl } from './module/User/UserCtrl';


const url = `http://localhost:${config.common.port}`;
const app = express();

app.use((req, res, next) => {
	console.log('');
	console.log(`>:${req.path}`);
	next();
});
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));
app.use(bodyParser.json({ limit: '10mb' }));

/* для подкл к API */
app.use(cors());
app.options('*', cors());

// Подключение модулей
app.use(UserCtrl);

// Подключение модулей
app.use(IndexController.router);

console.log(`server start at ${url}`);
app.listen(config.common.port);