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
const Internals = require("./internals");
const type_1 = require("../type");
/**
 * User entity class.
 */
let Entity = class Entity extends Class.Null {
};
__decorate([
    RestDB.Schema.Primary(),
    RestDB.Schema.Required(),
    RestDB.Schema.String(0, 24),
    Class.Public()
], Entity.prototype, "id", void 0);
__decorate([
    RestDB.Schema.Alias('user_id'),
    RestDB.Schema.Required(),
    RestDB.Schema.String(0, 255),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "userId", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(type_1.Type)),
    Class.Public()
], Entity.prototype, "type", void 0);
__decorate([
    RestDB.Schema.Alias('created_at'),
    RestDB.Schema.Required(),
    RestDB.Schema.Timestamp(),
    Class.Public()
], Entity.prototype, "createdAt", void 0);
__decorate([
    RestDB.Schema.Alias('signed_up_at'),
    RestDB.Schema.Required(),
    RestDB.Schema.Timestamp(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "signedUpAt", void 0);
__decorate([
    RestDB.Schema.Alias('updated_at'),
    RestDB.Schema.Required(),
    RestDB.Schema.Timestamp(),
    Class.Public()
], Entity.prototype, "updatedAt", void 0);
__decorate([
    RestDB.Schema.Alias('last_request_at'),
    RestDB.Schema.Required(),
    RestDB.Schema.Timestamp(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "lastRequestAt", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(0, 255),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "email", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(0, 32),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "phone", void 0);
__decorate([
    RestDB.Schema.Alias('custom_attributes'),
    RestDB.Schema.Required(),
    RestDB.Schema.Object(Object),
    Class.Public()
], Entity.prototype, "customAttributes", void 0);
__decorate([
    RestDB.Schema.Alias('session_count'),
    RestDB.Schema.Required(),
    RestDB.Schema.Integer(0),
    Class.Public()
], Entity.prototype, "sessionCount", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(Internals.Avatar),
    Class.Public()
], Entity.prototype, "avatar", void 0);
__decorate([
    RestDB.Schema.Alias('unsubscribed_from_emails'),
    RestDB.Schema.Required(),
    RestDB.Schema.Boolean(),
    Class.Public()
], Entity.prototype, "unsubscribedFromEmails", void 0);
__decorate([
    RestDB.Schema.Alias('location_data'),
    RestDB.Schema.Required(),
    RestDB.Schema.Object(Internals.Location),
    Class.Public()
], Entity.prototype, "locationData", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "pseudonym", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Boolean(),
    Class.Public()
], Entity.prototype, "anonymous", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(Object),
    Class.Public()
], Entity.prototype, "companies", void 0);
__decorate([
    RestDB.Schema.Alias('social_profiles'),
    RestDB.Schema.Required(),
    RestDB.Schema.Object(Object),
    Class.Public()
], Entity.prototype, "socialProfiles", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(Object),
    Class.Public()
], Entity.prototype, "segments", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(Object),
    Class.Public()
], Entity.prototype, "tags", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "name", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "referrer", void 0);
__decorate([
    RestDB.Schema.Alias('utm_source'),
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "utmSource", void 0);
__decorate([
    RestDB.Schema.Alias('utm_medium'),
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "utmMedium", void 0);
__decorate([
    RestDB.Schema.Alias('utm_campaign'),
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "utmCampaign", void 0);
__decorate([
    RestDB.Schema.Alias('utm_term'),
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "utmTerm", void 0);
__decorate([
    RestDB.Schema.Alias('utm_content'),
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "utmContent", void 0);
Entity = __decorate([
    RestDB.Schema.Entity('users'),
    Class.Describe()
], Entity);
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map