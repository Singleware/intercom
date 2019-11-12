"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Validators = require("@singleware/types");
/**
 * Create user, entity class.
 */
let Create = class Create extends Class.Null {
};
__decorate([
    RestDB.Schema.Alias('user_id'),
    RestDB.Schema.String(0, 255),
    Class.Public()
], Create.prototype, "userId", void 0);
__decorate([
    Validators.Validate(new Validators.Common.Email()),
    RestDB.Schema.String(0, 255),
    Class.Public()
], Create.prototype, "email", void 0);
__decorate([
    RestDB.Schema.Alias('signed_up_at'),
    RestDB.Schema.Timestamp(),
    Class.Public()
], Create.prototype, "signedUpAt", void 0);
__decorate([
    RestDB.Schema.Alias('last_request_at'),
    RestDB.Schema.Timestamp(),
    Class.Public()
], Create.prototype, "lastRequestAt", void 0);
__decorate([
    RestDB.Schema.String(0, 32),
    Class.Public()
], Create.prototype, "phone", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Create.prototype, "name", void 0);
__decorate([
    RestDB.Schema.Alias('custom_attributes'),
    RestDB.Schema.Object(Object),
    Class.Public()
], Create.prototype, "customAttributes", void 0);
__decorate([
    RestDB.Schema.Array(Object),
    Class.Public()
], Create.prototype, "companies", void 0);
__decorate([
    RestDB.Schema.Alias('unsubscribed_from_emails'),
    RestDB.Schema.Boolean(),
    Class.Public()
], Create.prototype, "unsubscribedFromEmails", void 0);
__decorate([
    RestDB.Schema.Alias('update_last_request_at'),
    RestDB.Schema.Boolean(),
    Class.Public()
], Create.prototype, "updateLastRequestAt", void 0);
__decorate([
    RestDB.Schema.Alias('new_session'),
    RestDB.Schema.Boolean(),
    Class.Public()
], Create.prototype, "newSession", void 0);
Create = __decorate([
    RestDB.Schema.Entity('users'),
    Class.Describe()
], Create);
exports.Create = Create;
//# sourceMappingURL=create.js.map