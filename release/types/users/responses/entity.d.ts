/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Internals from './internals';
import { Type } from '../type';
/**
 * User entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * The Intercom defined id representing the user.
     * Max 20 characters.
     */
    id: string;
    /**
     * The user id you have defined for the user.
     * Max limit of 255 UTF-8 characters, and should not have trailing or leading spaces.
     */
    userId: string | null;
    /**
     * User type.
     */
    type: Type;
    /**
     * The time the user was added to Intercom.
     */
    createdAt: Date;
    /**
     * The time the user signed up
     */
    signedUpAt: Date | null;
    /**
     * The last time the user was updated.
     */
    updatedAt: Date;
    /**
     * The time the user last recorded making a request.
     */
    lastRequestAt: Date;
    /**
     * The email you have defined for the user.
     * Max limit of 255 UTF-8 characters, and should not have trailing or leading spaces.
     */
    email: string | null;
    /**
     * The phone number of the user.
     */
    phone: string | null;
    /**
     * The custom attributes you have set on the user (case sensitive).
     */
    customAttributes: any;
    /**
     * How many sessions the user has recorded.
     */
    sessionCount: number;
    /**
     * An avatar object for the user.
     */
    avatar: Internals.Avatar;
    /**
     * An avatar object for the user.
     */
    unsubscribedFromEmails: boolean;
    /**
     * An avatar object for the user.
     */
    locationData: Internals.Location;
    /**
     * The pseudonym used if this user was previously a Lead
     * @see http://docs.intercom.io/Intercom-for-customer-communication/the-intercom-messenger
     */
    pseudonym: string | null;
    /**
     * Whether or not this is a Lead. Always false.
     */
    anonymous: boolean;
    /**
     * A list of companies for the user.
     */
    companies: any;
    /**
     * A list of social profiles associated with the user.
     */
    socialProfiles: any;
    /**
     * A list of segments associated with the user.
     */
    segments: any;
    /**
     * A list of tags associated with the user.
     */
    tags: any;
    /**
     * The full name of the user.
     */
    name: string | null;
    /**
     * The URL of the page the user was last on.
     */
    referrer: string | null;
    /**
     * Identifies which site sent the traffic.
     */
    utmSource: string | null;
    /**
     * Identifies what type of link was used.
     */
    utmMedium: string | null;
    /**
     * Identifies a specific product promotion or strategic campaign.
     */
    utmCampaign: string | null;
    /**
     * Identifies search terms.
     */
    utmTerm: string | null;
    /**
     * Identifies what specifically was clicked to bring the user to the site.
     */
    utmContent: string | null;
}
