import alt from 'alt';
import Vehicle from '../models/vehicle.model';

/**
 * Spawn entities into world
 */
const bootstrapLoader = async (): Promise<void> => {
  try {
    /**
     * Load all vehicles and spawn them
     */
    const vehicles = await Vehicle.find();
    for (const vehicle of vehicles) {
      vehicle.spawn();
    }
    alt.log('Game successfully bootstrapped!');
  } catch (err) {
    alt.logError(`Error while bootstrapping game (Error: ${err.message} / ${err.stack})!`);
  }
};

export default bootstrapLoader;
