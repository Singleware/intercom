/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
/**
 * Create user, entity class.
 */
export declare class Create extends Class.Null {
    /**
     * A unique string identifier for the user.
     * It is required on creation if an email is not supplied.
     */
    userId?: string;
    /**
     * The user's email address.
     * It is required on creation if a user_id is not supplied.
     */
    email?: string;
    /**
     * The time the user signed up
     */
    signedUpAt?: Date;
    /**
     * The time the user last recorded making a request.
     */
    lastRequestAt?: Date;
    /**
     * The phone number of the user.
     */
    phone?: string;
    /**
     * The full name of the user.
     */
    name?: string;
    /**
     * The custom attributes you have set on the user (case sensitive).
     */
    customAttributes?: any;
    /**
     * A list of companies for the user.
     */
    companies?: any[];
    /**
     * An avatar object for the user.
     */
    unsubscribedFromEmails?: boolean;
    /**
     * Instructs Intercom to update the users' last_request_at value to the current API service time in UTC.
     * Default value if not sent is false.
     */
    updateLastRequestAt?: boolean;
    /**
     * Instructs Intercom to register the request as a session.
     */
    newSession?: boolean;
}
