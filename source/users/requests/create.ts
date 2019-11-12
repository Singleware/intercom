/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Validators from '@singleware/types';

/**
 * Create user, entity class.
 */
@RestDB.Schema.Entity('users')
@Class.Describe()
export class Create extends Class.Null {
  /**
   * A unique string identifier for the user.
   * It is required on creation if an email is not supplied.
   */
  @RestDB.Schema.Alias('user_id')
  @RestDB.Schema.String(0, 255)
  @Class.Public()
  public userId?: string;

  /**
   * The user's email address.
   * It is required on creation if a user_id is not supplied.
   */
  @Validators.Validate(new Validators.Common.Email())
  @RestDB.Schema.String(0, 255)
  @Class.Public()
  public email?: string;

  /**
   * The time the user signed up
   */
  @RestDB.Schema.Alias('signed_up_at')
  @RestDB.Schema.Timestamp()
  @Class.Public()
  public signedUpAt?: Date;

  /**
   * The time the user last recorded making a request.
   */
  @RestDB.Schema.Alias('last_request_at')
  @RestDB.Schema.Timestamp()
  @Class.Public()
  public lastRequestAt?: Date;

  /**
   * The phone number of the user.
   */
  @RestDB.Schema.String(0, 32)
  @Class.Public()
  public phone?: string;

  /**
   * The full name of the user.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public name?: string;

  /**
   * The custom attributes you have set on the user (case sensitive).
   */
  @RestDB.Schema.Alias('custom_attributes')
  @RestDB.Schema.Object(Object)
  @Class.Public()
  public customAttributes?: any;

  /**
   * A list of companies for the user.
   */
  @RestDB.Schema.Array(Object)
  @Class.Public()
  public companies?: any[];

  /**
   * An avatar object for the user.
   */
  @RestDB.Schema.Alias('unsubscribed_from_emails')
  @RestDB.Schema.Boolean()
  @Class.Public()
  public unsubscribedFromEmails?: boolean;

  /**
   * Instructs Intercom to update the users' last_request_at value to the current API service time in UTC.
   * Default value if not sent is false.
   */
  @RestDB.Schema.Alias('update_last_request_at')
  @RestDB.Schema.Boolean()
  @Class.Public()
  public updateLastRequestAt?: boolean;

  /**
   * Instructs Intercom to register the request as a session.
   */
  @RestDB.Schema.Alias('new_session')
  @RestDB.Schema.Boolean()
  @Class.Public()
  public newSession?: boolean;
}
