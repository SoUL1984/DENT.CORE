import { ModelRulesC, ModelRulesT } from '@a-a-game-studio/aa-components/lib';

export namespace UserV {
    /**
     * Выборка пользователей по установленным параметрам
     */
    export function selectUser(): ModelRulesC {
        const rules = new ModelRulesC();

        rules.set(
            rules.rule('user_id')
            .type(ModelRulesT.int)
            .errorEx('user_id', 'user_id - значение некорректное')
        );

        rules.set(
            rules.rule('username')
            .type(ModelRulesT.text)
            .errorEx('username', 'username - значение некорректное')
        );

        rules.set(
            rules.rule('user_rank')
            .type(ModelRulesT.int)
            .errorEx('user_rank', 'user_rank - значение некорректное')
        );

        rules.set(
            rules.rule('user_office_id')
            .type(ModelRulesT.int)
            .errorEx('user_office_id', 'user_office_id - значение некорректное')
        );

        rules.set(
            rules.rule('user_mobile')
            .type(ModelRulesT.text)
            .errorEx('user_mobile', 'user_mobile - значение некорректное')
        );

        rules.set(
            rules.rule('user_fullname')
            .type(ModelRulesT.text)
            .errorEx('user_fullname', 'user_fullname - значение некорректное')
        );

        return rules;
    }
}
