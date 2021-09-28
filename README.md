# Запускатор

### 1 - Основное ядро api

    npm run start

### 2 - Основное ядро api в режиме отладки и hot reload

    npm run watch

### 3 - Применить миграции

    npm run migration:up
    knex migrate:latest

### 4 - Отменить миграции

    npm run migration:down
    knex migrate:rollback

### 5 - Создать миграцию

    npm run migration:create [migration_name] -x ts
    knex migrate:make [migration_name] -x ts




**Здесь данные забираются от поставщика и приводятся в единый унифицированный вид**
**Так-же идет отправка заявак поставщику**


## Абриватуры в названиях
SpNameAPI, SpNameSQL - основной сайт
PvzNameSQL - Запросы к базе данных для конструктора интеграции поставщиков
