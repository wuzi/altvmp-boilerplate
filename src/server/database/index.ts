import alt from 'alt';
import mongoose from 'mongoose';

const databaseLoader = async (): Promise<void> => {
  if (!process.env.DATABASE) {
    alt.logError('Env variable "DATABASE" is not defined');
    return;
  }

  mongoose.connect(process.env.DATABASE as string, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }).then((): void => {
    alt.log('Database connected successfully');
  }).catch((): void => {
    alt.logError('Could not connnect to database');
  });
};

export default databaseLoader;
