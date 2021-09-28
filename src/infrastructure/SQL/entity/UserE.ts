/** Роли для системы */
export enum RoleT {
  director = "director",
  courier = "courier",
  admin = "admin",
  customer = "customer",
  dentaltechn = "dentaltechn",
}

export interface UserI {
  id?: number;
  email?: string;
  psw?: string;
  name?: string;
  phone?: string;
  birthday?: string;
  city?: string;
  address?: string;
  add_info?: string;
  role?: RoleT;
  created_at?: string;
  updated_at?: string;
}

// ======================================================================
// Описание правил на создание и обновление записей таблицы пользователей
// ======================================================================
export class UserE {
  /** Имя таблицы */
  public static NAME = "rd_user";

  // /** Правила на создание */
  // public getRulesInsert(): ModelRulesC {
  //     const rules = new ModelRulesC();

  //     rules.set(rules.rule('alias')
  //         .type(ModelRulesT.text)
  //         .require()
  //         .errorEx('alias', 'alias - отсутствует значение')
  //     );

  //     rules.set(rules.rule('name')
  //         .type(ModelRulesT.text)
  //         .require()
  //         .errorEx('name', 'name - отсутствует значение')
  //     );

  //     rules.set(rules.rule('address')
  //         .type(ModelRulesT.text)
  //         .require()
  //         .errorEx('address', 'address - отсутствует значение')
  //     );

  //     rules.set(rules.rule('qr_code')
  //         .type(ModelRulesT.text)
  //         .require()
  //         .errorEx('qr_code', 'qr_code - отсутствует значение')
  //     );

  //     return rules;
  // }

  // /** Правила на обновление */
  // public getRulesUpdate(): ModelRulesC {
  //     const rules = new ModelRulesC();

  //     rules.set(rules.rule('alias')
  //         .type(ModelRulesT.text)
  //         .error(`${PvzE.NAME} - alias`)
  //     );

  //     rules.set(rules.rule('name')
  //         .type(ModelRulesT.text)
  //         .error(`${PvzE.NAME} - name`)
  //     );

  //     rules.set(rules.rule('address')
  //         .type(ModelRulesT.text)
  //         .error(`${PvzE.NAME} - address`)
  //     );

  //     rules.set(rules.rule('qr_code')
  //         .type(ModelRulesT.text)
  //         .error(`${PvzE.NAME} - qr_code`)
  //     );

  //     return rules;
  // }
}
