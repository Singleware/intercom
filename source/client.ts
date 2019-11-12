/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

import * as UserRequests from './users/requests';

/**
 * Client driver class.
 */
@Injection.Describe({ singleton: true, name: 'client' })
@Class.Describe()
export class Client extends RestDB.Driver {
  /**
   * Last payload data.
   */
  @Class.Private()
  private payloadData?: RestDB.Entity;

  /**
   * Gets the request Id based on the specified entity model and entity Id.
   * @param model Entity model.
   * @param id Entity Id.
   * @returns Returns the request Id.
   */
  @Class.Protected()
  protected getRequestId(model: RestDB.Model, id: string): string {
    return `${super.getRequestId(model, id)}/`;
  }

  /**
   * Gets the request query string based on the specified entity model, fields and query filter.
   * @param model Entity model.
   * @param query Query filter.
   * @param fields Viewed fields.
   * @returns Returns the parsed query string.
   * @throws Throws an error when used with filters or viewed fields. (Feature not supported)
   */
  @Class.Protected()
  protected getRequestQuery(model: RestDB.Model, query?: RestDB.Query, fields?: string[]): string {
    if (query || (fields && fields.length > 0)) {
      throw new Error(`Query filter and Viewed field doesn't supported.`);
    }
    return '/';
  }

  /**
   * Gets the request method based on the specified entity model.
   * @param model Entity model.
   * @param method Request method.
   * @returns Returns the request method.
   */
  @Class.Protected()
  protected getRequestMethod(model: RestDB.Model, method: RestDB.Method): RestDB.Method {
    switch (model) {
      case UserRequests.Create:
      case UserRequests.Update:
        return RestDB.Method.POST;
    }
    return method;
  }

  /**
   * Gets the result Id from the given response entity.
   * @param model Entity model.
   * @param response Response entity.
   * @returns Returns the result Id or undefined when the result Id was not found.
   * @throws Throws an error when the response body doesn't contains the insert results.
   */
  @Class.Protected()
  protected getInsertResponse(model: RestDB.Model, response: RestDB.Responses.Output): string | undefined {
    this.payloadData = void 0;
    if (response.status.code === 200) {
      if (!(response.payload instanceof Object) || (this.payloadData = <RestDB.Entity>response.payload).id === void 0) {
        throw new Error(`The response body must be an object containing the insert id.`);
      }
      return this.payloadData.id;
    }
    return void 0;
  }

  /**
   * Gets the found entity from the given response entity.
   * @param model Entity model.
   * @param response Response entity.
   * @returns Returns the entity, a promise to get it or undefined when the entity was not found.
   */
  @Class.Protected()
  protected getFindByIdResponse<T extends RestDB.Entity>(
    model: RestDB.Model,
    response: RestDB.Responses.Output
  ): T | undefined {
    if (response.status.code === 200) {
      return response.payload;
    }
    return void 0;
  }

  /**
   * Gets the deleted entity status from the given response entity.
   * @param model Entity model.
   * @param response Response entity.
   * @returns Returns the deleted entity status.
   */
  @Class.Protected()
  protected getDeleteByIdResponse(model: RestDB.Model, response: RestDB.Responses.Output): boolean {
    return response.status.code === 200;
  }

  /**
   * Notify an error in the given response entity for all listeners.
   * @param model Entity model.
   * @param response Response entity.
   */
  @Class.Protected()
  protected async notifyErrorResponse(model: RestDB.Model, response: RestDB.Responses.Output): Promise<void> {
    this.payloadData = void 0;
    if (response.payload instanceof Object) {
      this.payloadData = <RestDB.Entity>response.payload;
      if (this.payloadData.errors instanceof Array) {
        const messages = [];
        for (const error of this.payloadData.errors) {
          messages.push(`${error.code}: ${error.message}`);
        }
        throw new Error(`Endpoint error: ${messages.join('\n')}`);
      }
    } else if (typeof response.payload === 'string') {
      throw new Error(`Server error: ${response.payload}`);
    }
    await super.notifyErrorResponse(model, response);
  }

  /**
   * Default constructor.
   */
  constructor() {
    super();
    this.setHeader('Accept', 'application/json');
    this.connect();
  }

  /**
   * Connect to the API.
   * @param url Api URL.
   */
  @Class.Public()
  public async connect(uri?: string): Promise<void> {
    await super.connect(uri || 'https://api.intercom.io');
  }

  /**
   * Gets the payload from the last request.
   */
  @Class.Public()
  public get payload(): RestDB.Entity | undefined {
    return this.payloadData;
  }

  /**
   * Sets the authorization token for all subsequent requests.
   * @param token Authorization token.
   * @returns Returns the client instance.
   */
  @Class.Public()
  public setAuthorization(token: string): Client {
    return this.setHeader('Authorization', `Bearer ${token}`), this;
  }
}
