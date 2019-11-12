/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

import * as Requests from './requests';
import * as Responses from './responses';

import { Client } from '../client';

/**
 * Users mapper class.
 */
@Injection.Inject(Client)
@Injection.Describe({ singleton: true, name: 'users' })
@Class.Describe()
export class Mapper extends RestDB.Mapper<Responses.Entity> {
  /**
   * Client instance.
   */
  @Class.Private()
  private client!: Client;

  /**
   * Default constructor.
   * @param dependencies Mapper dependencies.
   */
  constructor(dependencies: any) {
    super(dependencies.client, Responses.Entity);
    this.client = dependencies.client;
  }

  /**
   * Creates a new user.
   * @param request User creation request.
   * @returns Returns a promise to get the new user entity or undefined when the operation has been failed.
   */
  @Class.Public()
  public async create(request: Requests.Create): Promise<Responses.Entity | undefined> {
    if ((await super.insertEx(Requests.Create, request)) !== void 0) {
      return RestDB.Outputer.createFull(Responses.Entity, <RestDB.Entity>this.client.payload, []);
    }
    return void 0;
  }

  /**
   * Modify the user that corresponds to the specified update request.
   * @param request User update request.
   * @returns Returns a promise to get the modified user entity or undefined when the operation has been failed.
   */
  @Class.Public()
  public async modify(request: Requests.Update): Promise<Responses.Entity | undefined> {
    if ((await super.insertEx(Requests.Update, request)) !== void 0) {
      return RestDB.Outputer.createFull(Responses.Entity, <RestDB.Entity>this.client.payload, []);
    }
    return void 0;
  }

  /**
   * Load the user that corresponds to the specified Id.
   * @param id User Id.
   * @returns Returns a promise to get the user entity or undefined when the user wasn't found.
   */
  @Class.Public()
  public async load(id: string): Promise<Responses.Entity | undefined> {
    return await super.findById(id);
  }

  /**
   * Remove the user that corresponds to the specified Id.
   * @param id User Id.
   * @returns Returns a promise to get true when the removal was successful, false otherwise.
   */
  @Class.Public()
  public async remove(id: string): Promise<boolean> {
    return await super.deleteById(id);
  }
}
