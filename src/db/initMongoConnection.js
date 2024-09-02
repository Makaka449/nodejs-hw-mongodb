import mongoose from 'mongoose';

export const initMongoConnection = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error('MONGODB_URI is not defined');
    }
    
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Successfully connected to MongoDB');
  } catch (error) {
    console.error('Mongo connection failed:', error.message);
    process.exit(1);
  }
};
