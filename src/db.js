import mongo from 'mongodb';

const { MongoClient } = mongo;

const url = process.env.MONGO_URL;

export const client = new MongoClient(url, { useNewUrlParser: true , useUnifiedTopology: true});

export async function connectDB() {
    try {
        await client.connect()
        await client.db('admin').command({ ping: 1 });
        console.log('connected to DB success');

    } catch (e) {
        console.error(e);
        await client.close();
    }
}
