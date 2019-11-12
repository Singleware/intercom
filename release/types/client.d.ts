import * as RestDB from '@singleware/restdb';
/**
 * Client driver class.
 */
export declare class Client extends RestDB.Driver {
    /**
     * Last payload data.
     */
    private payloadData?;
    /**
     * Gets the request Id based on the specified entity model and entity Id.
     * @param model Entity model.
     * @param id Entity Id.
     * @returns Returns the request Id.
     */
    protected getRequestId(model: RestDB.Model, id: string): string;
    /**
     * Gets the request query string based on the specified entity model, fields and query filter.
     * @param model Entity model.
     * @param query Query filter.
     * @param fields Viewed fields.
     * @returns Returns the parsed query string.
     * @throws Throws an error when used with filters or viewed fields. (Feature not supported)
     */
    protected getRequestQuery(model: RestDB.Model, query?: RestDB.Query, fields?: string[]): string;
    /**
     * Gets the request method based on the specified entity model.
     * @param model Entity model.
     * @param method Request method.
     * @returns Returns the request method.
     */
    protected getRequestMethod(model: RestDB.Model, method: RestDB.Method): RestDB.Method;
    /**
     * Gets the result Id from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the result Id or undefined when the result Id was not found.
     * @throws Throws an error when the response body doesn't contains the insert results.
     */
    protected getInsertResponse(model: RestDB.Model, response: RestDB.Responses.Output): string | undefined;
    /**
     * Gets the found entity from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the entity, a promise to get it or undefined when the entity was not found.
     */
    protected getFindByIdResponse<T extends RestDB.Entity>(model: RestDB.Model, response: RestDB.Responses.Output): T | undefined;
    /**
     * Gets the deleted entity status from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the deleted entity status.
     */
    protected getDeleteByIdResponse(model: RestDB.Model, response: RestDB.Responses.Output): boolean;
    /**
     * Notify an error in the given response entity for all listeners.
     * @param model Entity model.
     * @param response Response entity.
     */
    protected notifyErrorResponse(model: RestDB.Model, response: RestDB.Responses.Output): Promise<void>;
    /**
     * Default constructor.
     */
    constructor();
    /**
     * Connect to the API.
     * @param url Api URL.
     */
    connect(uri?: string): Promise<void>;
    /**
     * Gets the payload from the last request.
     */
    get payload(): RestDB.Entity | undefined;
    /**
     * Sets the authorization token for all subsequent requests.
     * @param token Authorization token.
     * @returns Returns the client instance.
     */
    setAuthorization(token: string): Client;
}
