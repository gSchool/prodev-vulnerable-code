import mongoose from 'mongoose';

const mongoUrl = process.env['MONGO_URL'];
if (mongoUrl) {
  console.log(`Connecting to MongoDB with ${mongoUrl}`);
} else {
  console.error('MONGO_URL environment variable not set.');
  process.exit(2);
} 

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

export const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const PersonSchema = new mongoose.Schema({
  name: String,
});

export const Person = mongoose.model('Person', PersonSchema);
