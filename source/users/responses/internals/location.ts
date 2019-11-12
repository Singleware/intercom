/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * User location, entity class.
 */
@RestDB.Schema.Entity('users/location')
@Class.Describe()
export class Location extends Class.Null {
  /**
   * A city name.
   */
  @RestDB.Schema.Alias('city_name')
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public cityName?: string | null;

  /**
   * A continent code.
   */
  @RestDB.Schema.Alias('continent_code')
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public continentCode?: string | null;

  /**
   * An ISO 3166 country code.
   */
  @RestDB.Schema.Alias('country_code')
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public countryCode?: string | null;

  /**
   * The country name.
   */
  @RestDB.Schema.Alias('country_name')
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public countryName?: string | null;

  /**
   * A postal code.
   */
  @RestDB.Schema.Alias('postal_code')
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public postalCode?: string | null;

  /**
   * A region name.
   */
  @RestDB.Schema.Alias('region_name')
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public regionName?: string | null;

  /**
   * An ISO 8601 timezone.
   */
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public timezone?: string | null;
}
