/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Testing from '@singleware/testing';
import * as Injection from '@singleware/injection';

import * as Intercom from '../source';

import { Helper } from './helper';

/**
 * Intercom test case.
 */
@Class.Describe()
export class Users extends Testing.Case {
  /**
   * Users mapper.
   */
  @Injection.Inject(Intercom.Users.Mapper)
  @Class.Private()
  private users!: Intercom.Users.Mapper;

  /**
   * Default constructor.
   */
  constructor() {
    super();
    Helper.setAuthorization();
  }

  /**
   * Create user successful.
   */
  @Testing.Method()
  @Class.Public()
  public async createUsersSuccessful(): Promise<void> {
    // Test user creation.
    const inserted = <Intercom.Users.Entity>await this.users.create({
      newSession: true,
      email: 'demo@singleware.com.br',
      phone: '+5511900000000',
      name: 'Demo Singleware',
      customAttributes: {
        'Language Override': 'pt-BR'
      }
    });
    this.areNotSame(inserted, void 0);
  }

  /**
   * Update user successful.
   */
  @Testing.Method()
  @Class.Public()
  public async updateUsersSuccessful(): Promise<void> {
    // Create new user.
    const inserted = <Intercom.Users.Entity>await Helper.getNewUserEntity();
    this.areNotSame(inserted, void 0);
    // Test user updating.
    const updated = await this.users.modify({
      id: inserted.id,
      name: 'New user name'
    });
    this.areNotSame(updated, void 0);
  }

  /**
   * Load user successful.
   */
  @Testing.Method()
  @Class.Public()
  public async loadUsersSuccessful(): Promise<void> {
    // Create new user.
    const inserted = <Intercom.Users.Entity>await Helper.getNewUserEntity();
    this.areNotSame(inserted, void 0);
    // Test user loading.
    const loaded = <Intercom.Users.Entity>await this.users.load(inserted.id);
    this.areNotSame(loaded, void 0);
    this.areSame(inserted.id, loaded.id);
  }

  /**
   * Remove user successful.
   */
  @Testing.Method()
  @Class.Public()
  public async removeUsersSuccessful(): Promise<void> {
    // Create new user.
    const inserted = <Intercom.Users.Entity>await Helper.getNewUserEntity();
    this.areNotSame(inserted, void 0);
    // Test user removal.
    this.isTrue(await this.users.remove(inserted.id));
  }
}
