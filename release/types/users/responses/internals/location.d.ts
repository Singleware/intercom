/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
/**
 * User location, entity class.
 */
export declare class Location extends Class.Null {
    /**
     * A city name.
     */
    cityName?: string | null;
    /**
     * A continent code.
     */
    continentCode?: string | null;
    /**
     * An ISO 3166 country code.
     */
    countryCode?: string | null;
    /**
     * The country name.
     */
    countryName?: string | null;
    /**
     * A postal code.
     */
    postalCode?: string | null;
    /**
     * A region name.
     */
    regionName?: string | null;
    /**
     * An ISO 8601 timezone.
     */
    timezone?: string | null;
}
