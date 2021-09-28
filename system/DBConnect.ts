import Knex from 'knex';
import * as System from '@63pokupki/nodejs-common/lib';

import * as mainConfig from '../Configs/MainConfig';
import * as spConfig from '../Configs/SpConfig';

// Мастер база данных балансировщика основного приложения, если имеется
export const db: Knex = Knex(mainConfig.mysql);

// Мастер база данных приложения если имеется
export const dbMaster: Knex = Knex(mainConfig.mysqlMaster);

// База данных основного SP проекта
export const dbMain: Knex = Knex(spConfig.mysqlMain);

export const redisSys = new System.RedisSys(mainConfig.redis);
