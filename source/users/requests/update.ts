/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import { Create } from './create';

/**
 * Update user, entity class.
 */
@RestDB.Schema.Entity('users')
@Class.Describe()
export class Update extends Create {
  /**
   * The Intercom defined id representing the user.
   * Max 20 characters.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(0, 24)
  @Class.Public()
  public id!: string;
}
