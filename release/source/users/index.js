"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
var mapper_1 = require("./mapper");
exports.Mapper = mapper_1.Mapper;
var type_1 = require("./type");
exports.Type = type_1.Type;
// Imported aliases.
const Requests = require("./requests");
const Responses = require("./responses");
// Exported aliases
exports.Entity = Responses.Entity;
/**
 * Requests namespace.
 */
exports.Requests = Requests;
/**
 * Responses namespace.
 */
exports.Responses = Responses;
//# sourceMappingURL=index.js.map