import horizon from '@horizon/client';

import logger from './utils/logger.js';

const hz = horizon({
  host: 'localhost:8181',
});

hz.onReady(() => {
  logger.debug('Horizon:: Ready');
});

hz.connect();

module.exports = hz;
