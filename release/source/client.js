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
const Injection = require("@singleware/injection");
const RestDB = require("@singleware/restdb");
const UserRequests = require("./users/requests");
/**
 * Client driver class.
 */
let Client = class Client extends RestDB.Driver {
    /**
     * Default constructor.
     */
    constructor() {
        super();
        this.setHeader('Accept', 'application/json');
        this.connect();
    }
    /**
     * Gets the request Id based on the specified entity model and entity Id.
     * @param model Entity model.
     * @param id Entity Id.
     * @returns Returns the request Id.
     */
    getRequestId(model, id) {
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
    getRequestQuery(model, query, fields) {
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
    getRequestMethod(model, method) {
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
    getInsertResponse(model, response) {
        this.payloadData = void 0;
        if (response.status.code === 200) {
            if (!(response.payload instanceof Object) || (this.payloadData = response.payload).id === void 0) {
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
    getFindByIdResponse(model, response) {
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
    getDeleteByIdResponse(model, response) {
        return response.status.code === 200;
    }
    /**
     * Notify an error in the given response entity for all listeners.
     * @param model Entity model.
     * @param response Response entity.
     */
    async notifyErrorResponse(model, response) {
        this.payloadData = void 0;
        if (response.payload instanceof Object) {
            this.payloadData = response.payload;
            if (this.payloadData.errors instanceof Array) {
                const messages = [];
                for (const error of this.payloadData.errors) {
                    messages.push(`${error.code}: ${error.message}`);
                }
                throw new Error(`Endpoint error: ${messages.join('\n')}`);
            }
        }
        else if (typeof response.payload === 'string') {
            throw new Error(`Server error: ${response.payload}`);
        }
        await super.notifyErrorResponse(model, response);
    }
    /**
     * Connect to the API.
     * @param url Api URL.
     */
    async connect(uri) {
        await super.connect(uri || 'https://api.intercom.io');
    }
    /**
     * Gets the payload from the last request.
     */
    get payload() {
        return this.payloadData;
    }
    /**
     * Sets the authorization token for all subsequent requests.
     * @param token Authorization token.
     * @returns Returns the client instance.
     */
    setAuthorization(token) {
        return this.setHeader('Authorization', `Bearer ${token}`), this;
    }
};
__decorate([
    Class.Private()
], Client.prototype, "payloadData", void 0);
__decorate([
    Class.Protected()
], Client.prototype, "getRequestId", null);
__decorate([
    Class.Protected()
], Client.prototype, "getRequestQuery", null);
__decorate([
    Class.Protected()
], Client.prototype, "getRequestMethod", null);
__decorate([
    Class.Protected()
], Client.prototype, "getInsertResponse", null);
__decorate([
    Class.Protected()
], Client.prototype, "getFindByIdResponse", null);
__decorate([
    Class.Protected()
], Client.prototype, "getDeleteByIdResponse", null);
__decorate([
    Class.Protected()
], Client.prototype, "notifyErrorResponse", null);
__decorate([
    Class.Public()
], Client.prototype, "connect", null);
__decorate([
    Class.Public()
], Client.prototype, "payload", null);
__decorate([
    Class.Public()
], Client.prototype, "setAuthorization", null);
Client = __decorate([
    Injection.Describe({ singleton: true, name: 'client' }),
    Class.Describe()
], Client);
exports.Client = Client;
//# sourceMappingURL=client.js.map