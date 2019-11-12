/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * User avatar, entity class.
 */
@RestDB.Schema.Entity('users/avatar')
@Class.Describe()
export class Avatar extends Class.Null {
  /**
   * An avatar image URL. note: the image url needs to be https.
   */
  @RestDB.Schema.Alias('image_url')
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public imageUrl!: string | null;
}
