/**
 * Load environment variables
 */
import dotenv from 'dotenv';
dotenv.config();

/**
 * Connect to database and bootstrap game
 */
import databaseLoader from './database';
import bootstrapLoader from './loaders/bootstrap.loader';
(async (): Promise<void> => {
  await databaseLoader();
  bootstrapLoader();
})();

/**
 * Modules (would be nice to load these automatically)
 */
import './modules/player';
