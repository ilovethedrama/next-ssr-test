import clientPromise from '@/lib/mongodb';
import { MongoClient } from 'mongodb';

const postForm = async (req: any, res: any) => {
  try {
    const client = await clientPromise;
    const db = client.db('KYUK_Operations');

    const postForm = await db.collection('referrals').insertOne(req.body);

    res.json(postForm);
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    console.error(message);
    throw new Error(message);
  }
};

export default postForm;
