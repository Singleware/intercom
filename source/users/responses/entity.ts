/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Internals from './internals';

import { Type } from '../type';

/**
 * User entity class.
 */
@RestDB.Schema.Entity('users')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * The Intercom defined id representing the user.
   * Max 20 characters.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Required()
  @RestDB.Schema.String(0, 24)
  @Class.Public()
  public id!: string;

  /**
   * The user id you have defined for the user.
   * Max limit of 255 UTF-8 characters, and should not have trailing or leading spaces.
   */
  @RestDB.Schema.Alias('user_id')
  @RestDB.Schema.Required()
  @RestDB.Schema.String(0, 255)
  @RestDB.Schema.Null()
  @Class.Public()
  public userId!: string | null;

  /**
   * User type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Type))
  @Class.Public()
  public type!: Type;

  /**
   * The time the user was added to Intercom.
   */
  @RestDB.Schema.Alias('created_at')
  @RestDB.Schema.Required()
  @RestDB.Schema.Timestamp()
  @Class.Public()
  public createdAt!: Date;

  /**
   * The time the user signed up
   */
  @RestDB.Schema.Alias('signed_up_at')
  @RestDB.Schema.Required()
  @RestDB.Schema.Timestamp()
  @RestDB.Schema.Null()
  @Class.Public()
  public signedUpAt!: Date | null;

  /**
   * The last time the user was updated.
   */
  @RestDB.Schema.Alias('updated_at')
  @RestDB.Schema.Required()
  @RestDB.Schema.Timestamp()
  @Class.Public()
  public updatedAt!: Date;

  /**
   * The time the user last recorded making a request.
   */
  @RestDB.Schema.Alias('last_request_at')
  @RestDB.Schema.Required()
  @RestDB.Schema.Timestamp()
  @RestDB.Schema.Null()
  @Class.Public()
  public lastRequestAt!: Date;

  /**
   * The email you have defined for the user.
   * Max limit of 255 UTF-8 characters, and should not have trailing or leading spaces.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(0, 255)
  @RestDB.Schema.Null()
  @Class.Public()
  public email!: string | null;

  /**
   * The phone number of the user.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(0, 32)
  @RestDB.Schema.Null()
  @Class.Public()
  public phone!: string | null;

  /**
   * The custom attributes you have set on the user (case sensitive).
   */
  @RestDB.Schema.Alias('custom_attributes')
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Object)
  @Class.Public()
  public customAttributes!: any;

  /**
   * How many sessions the user has recorded.
   */
  @RestDB.Schema.Alias('session_count')
  @RestDB.Schema.Required()
  @RestDB.Schema.Integer(0)
  @Class.Public()
  public sessionCount!: number;

  /**
   * An avatar object for the user.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Internals.Avatar)
  @Class.Public()
  public avatar!: Internals.Avatar;

  /**
   * An avatar object for the user.
   */
  @RestDB.Schema.Alias('unsubscribed_from_emails')
  @RestDB.Schema.Required()
  @RestDB.Schema.Boolean()
  @Class.Public()
  public unsubscribedFromEmails!: boolean;

  /**
   * An avatar object for the user.
   */
  @RestDB.Schema.Alias('location_data')
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Internals.Location)
  @Class.Public()
  public locationData!: Internals.Location;

  /**
   * The pseudonym used if this user was previously a Lead
   * @see http://docs.intercom.io/Intercom-for-customer-communication/the-intercom-messenger
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public pseudonym!: string | null;

  /**
   * Whether or not this is a Lead. Always false.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Boolean()
  @Class.Public()
  public anonymous!: boolean;

  /**
   * A list of companies for the user.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Object)
  @Class.Public()
  public companies!: any;

  /**
   * A list of social profiles associated with the user.
   */
  @RestDB.Schema.Alias('social_profiles')
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Object)
  @Class.Public()
  public socialProfiles!: any;

  /**
   * A list of segments associated with the user.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Object)
  @Class.Public()
  public segments!: any;

  /**
   * A list of tags associated with the user.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Object)
  @Class.Public()
  public tags!: any;

  /**
   * The full name of the user.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public name!: string | null;

  /**
   * The URL of the page the user was last on.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public referrer!: string | null;

  /**
   * Identifies which site sent the traffic.
   */
  @RestDB.Schema.Alias('utm_source')
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public utmSource!: string | null;

  /**
   * Identifies what type of link was used.
   */
  @RestDB.Schema.Alias('utm_medium')
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public utmMedium!: string | null;

  /**
   * Identifies a specific product promotion or strategic campaign.
   */
  @RestDB.Schema.Alias('utm_campaign')
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public utmCampaign!: string | null;

  /**
   * Identifies search terms.
   */
  @RestDB.Schema.Alias('utm_term')
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public utmTerm!: string | null;

  /**
   * Identifies what specifically was clicked to bring the user to the site.
   */
  @RestDB.Schema.Alias('utm_content')
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public utmContent!: string | null;
}
