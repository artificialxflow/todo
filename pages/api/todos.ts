import { NextApiRequest, NextApiResponse } from 'next';
import { getMongoClient } from '../../lib/mongodb';
import { errorHandler } from '../../middleware/errorHandler';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await getMongoClient();
    const db = client.db();

    switch (req.method) {
      case 'GET':
        const todos = await db.collection('todos').find({}).toArray();
        res.status(200).json(todos);
        break;
      case 'POST':
        const todo = await db.collection('todos').insertOne(req.body);
        res.status(201).json(todo);
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (err) {
    errorHandler(err as Error, req, res);
  }
} 