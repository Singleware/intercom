import * as RestDB from '@singleware/restdb';
import * as Requests from './requests';
import * as Responses from './responses';
/**
 * Users mapper class.
 */
export declare class Mapper extends RestDB.Mapper<Responses.Entity> {
    /**
     * Client instance.
     */
    private client;
    /**
     * Default constructor.
     * @param dependencies Mapper dependencies.
     */
    constructor(dependencies: any);
    /**
     * Creates a new user.
     * @param request User creation request.
     * @returns Returns a promise to get the new user entity or undefined when the operation has been failed.
     */
    create(request: Requests.Create): Promise<Responses.Entity | undefined>;
    /**
     * Modify the user that corresponds to the specified update request.
     * @param request User update request.
     * @returns Returns a promise to get the modified user entity or undefined when the operation has been failed.
     */
    modify(request: Requests.Update): Promise<Responses.Entity | undefined>;
    /**
     * Load the user that corresponds to the specified Id.
     * @param id User Id.
     * @returns Returns a promise to get the user entity or undefined when the user wasn't found.
     */
    load(id: string): Promise<Responses.Entity | undefined>;
    /**
     * Remove the user that corresponds to the specified Id.
     * @param id User Id.
     * @returns Returns a promise to get true when the removal was successful, false otherwise.
     */
    remove(id: string): Promise<boolean>;
}
