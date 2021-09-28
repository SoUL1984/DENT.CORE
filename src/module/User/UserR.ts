import { UserInfoI } from "../../infrastructure/SQL/entity/UserE";

/**
 * Маршруты для манипуляций с пользователями
 * Интерфейсы запросов/ответов
 */
export namespace UserR {
    /** 
     * SELECT user by param
     * Маршрут для получения пользователей по параметрам запроса
     */
    export namespace selectUser {
        /** APIURL */
        export const route = '/user/select-user';

        /** Alias действия */
        export const action = 'select-user';

        /**
         * Параметры api запроса
         */
        export interface RequestI {
            user_id?: number; 				// ID User
            user_type?: number; 			// Тип пользователя
            user_regdate?: number; 			// Дата регистрации
            username?: string; 				// Имя пользователя
            username_clean?: string; 		// Имя пользователя
            user_email?: string; 			// Email пользователя
            user_birthday?: string; 		// Дата рождения
            user_lang?: string; 			// Язык пользователя
            user_avatar?: string; 			// Аватарка
            consumer_rating?: number; 		// Рейтинг пользователя
            user_office_id?: number; 		// ID офиса для пользователя
            user_office_trusted?: string; 	// ID офиса для пользователя
            user_mobile?: string; 			// телефон
            user_fullname?: string; 		// Полное имя
            user_address_id?: number; 		// ID адреса
            user_colour?: string; 			// Цвет ника
            user_posts?: number;			// ??? количество постов пользователя
        }
        /**
         * Параметры api ответа
         */
        export interface ResponseI {
            list_user: UserInfoI[]
        }
    }
}
