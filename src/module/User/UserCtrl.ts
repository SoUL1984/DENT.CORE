import * as express from 'express';

/** используемая модель данных */
import { UserM } from './Model/UserM';

/** интерфейсы запросов/ответов и маршруты */
import { UserR as R } from './UserR';

const router = express.Router();

/**
 * Управление данными пользователей
 */
class UserCtrl {
    public userM: UserM;

    /**
     * Конструктор
     */
    public async faInit(): Promise<void> {
        // Инициализация бизнес моделей
        this.userM = new UserM(this.req);

        // // Проверка авторизации
        // await this.userSys.isAuth(); // !!

        // // Проверка являетесь ли вы администратором
        // this.userSys.isAdmin();
    }
}

/**
 * SELECT user by param
 * Получить список пользователей по установленным параметрам
 */
router.post(R.selectUser.route, faSendRouter(async (req: MainRequest, res: any) => {
    const ctrl = new UserCtrl(req, res);
    await ctrl.faInit();
    await ctrl.faAction(
        'Получить список пользователей по установленным параметрам',
        async () => await ctrl.userM.selectUser(req.body)
    );
}));

export { router as UserCtrl };
