/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Testing from '@singleware/testing';

import { Users } from './users.spec';

const suite = new Testing.Suite();
const logger = new Testing.Loggers.Tap();

// Test cases.
suite.addCase(Users);

(async function() {
  const report = await suite.perform();
  logger.print(report);
  process.exitCode = report.errors > 0 ? 1 : 0;
})();
