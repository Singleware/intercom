/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';

import * as Intercom from '../source';

/**
 * Helper class.
 */
@Class.Describe()
export class Helper extends Class.Null {
  /**
   * Sets the Intercom client authorization.
   */
  @Class.Public()
  public static setAuthorization(): void {
    Injection.resolve(Intercom.Client).setAuthorization('YOUR_TOKEN');
  }

  /**
   * Gets a new user entity.
   * @returns Returns a promise to get the new user entity or undefined when the operation has been failed.
   */
  @Class.Public()
  public static async getNewUserEntity(): Promise<Intercom.Users.Entity | undefined> {
    return await Injection.resolve(Intercom.Users.Mapper).create({
      newSession: true,
      signedUpAt: new Date(),
      email: 'user@singleware.com.br',
      phone: '+5511900000000'
    });
  }
}
