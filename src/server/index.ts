/**
 * Load environment variables
 */
import dotenv from 'dotenv';
dotenv.config();

/**
 * Connect to database
 */
import databaseLoader from './database';
databaseLoader();

/**
 * Modules (would be nice to load these automatically)
 */
import './modules/player';
