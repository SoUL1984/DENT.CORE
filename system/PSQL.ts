import { db, dbMaster } from './DBConnect';

// Системные сервисы
import { BaseSQL, MainRequest } from '@63pokupki/nodejs-common/lib';

/**
 * SQL Запросы
 */
export default class PSQL extends BaseSQL {
	constructor(req: MainRequest) {
		super(req);

		this.req = req;

		if (req.infrastructure.mysql) {
			this.dbBalancer = db;
		} else {
			this.errorSys.error('db_no_connection', 'Отсутствует подключение к mysql');
		}

		// Если мастер есть ставим его
		if (req.infrastructure.mysqlMaster) {
			this.dbMaster = dbMaster;
		} else { // если мастера нет ставим MaxScale
			this.dbMaster = db;
		}

		if (!this.dbMaster) { // Если мастера все еще нет ОШИБКА
			this.errorSys.error('db_master_no_connection', 'Отсутствует подключение к mysql мастеру');
		}
	}
}
