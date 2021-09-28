/** Системные классы */
import { BaseM, MainRequest } from '@63pokupki/nodejs-common';

/** Валидация */
import { UserV as V } from '../UserV';
/** Маршруты */
import { UserR as R } from '../UserR';

/** Класс сущности */
import { UserI } from '../../../infrastructure/SQL/entity/UserE';

/**
 * Модель пользователя
 */
export class UserM extends BaseM {

    private userSpSQL: UserSpSQL;

    constructor(req: MainRequest) {
        super(req);

        // Подключение запросов к базе данных
        this.userSpSQL = new UserSQL(req);
    }

    /**
     * SELECT purchase by param
     * Метод модели для выборки всех закупок по заданным параметрам
     */
    public async selectUser(data: R.selectUser.RequestI): Promise<R.selectUser.ResponseI> {
        const validData = this.logicSys.fValidData(V.selectUser(), data);

        let listUserByParam: UserInfoI[] = [];
        listUserByParam = await this.userSpSQL.listUserByParam(validData);

        let out: R.selectUser.ResponseI = {
            list_user: listUserByParam
        }

        return out;
    }
}
