import mongoose from 'mongoose' 

const MONGODB_URI = process.env.MONGODB_URI 

// Global language in parens in case typescript complains
// Look to global object for cached connection to database
    // If so, use it.  If not, create connection
    // Manage connections b/c of use of Server Actions
let cached = (global as any).mongoose || { conn: null, promise: null } 

export const connectToDatabase = async () => {
    if(cached.conn) return cached.conn 

    if(!MONGODB_URI) throw new Error('MONGODB_URI is missing')

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: 'roomshout',
        bufferCommands: false,
    })

    cached.conn = await cached.promise
    return cached.conn 
}