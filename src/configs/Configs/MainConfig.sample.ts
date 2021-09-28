// ================================
// Конфигурация
// ================================

/** Knex mysql */
export const mysql = {
	client: 'mysql2',
	connection: {
		host: '127.0.0.1',
		user: 'root',
		password: '12345678',
		database: 'dentdb',
	},
	pool: { min: 0, max: 10 },
	migrations: {
		tableName: 'knex_migrations',
		directory: './src/Infrastructure/SQL/Migrations',
	},
	acquireConnectionTimeout: 60000,
};

/** Knex mysql Мастер БД */
export const mysqlMaster = {
	client: 'mysql2',
	connection: {
		host: '10.1.100.34',
		user: 'root',
		password: '12345678',
		database: 'dev_pvz',
	},
	pool: { min: 0, max: 10 },
	migrations: {
		tableName: 'knex_migrations',
		directory: './src/Infrastructure/SQL/Migrations',
	},
	acquireConnectionTimeout: 60000,
};

/** Общие настройки */
export const common = {
	port: 3008 	
};
