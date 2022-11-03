import type { NextApiRequest, NextApiResponse } from 'next'
import { db, seedData } from '../../database';
import { IBlog } from '../../interfaces/IBlogs';
import { Blog } from '../../models';

type Data = 
| { message: string }
| IBlog[];

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if ( process.env.NODE_ENV === 'production' ) {
        return res.status(401).json({ message: 'No tiene acceso a este API'});
    }

    await db.connect();
    
    await Blog.deleteMany()
    await Blog.insertMany( seedData.initialData.blogs );
    await db.disconnect();

    res.status(200).json({ message: 'Proceso realizado correctamente' });
}

