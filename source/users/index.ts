/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
export { Mapper } from './mapper';
export { Type } from './type';

// Imported aliases.
import * as Requests from './requests';
import * as Responses from './responses';

// Exported aliases
export import Entity = Responses.Entity;

/**
 * Requests namespace.
 */
export import Requests = Requests;

/**
 * Responses namespace.
 */
export import Responses = Responses;
