import mongoose from 'mongoose';
import dotenv from 'dotenv';

require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

console.log(process.env.MONGO_URI)
if (!MONGO_URI) {
  throw new Error('Defina a variável de ambiente MONGO_URI');
}

let cached = global.mongoose || { conn: null, promise: null };

export default async function dbConnect() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
