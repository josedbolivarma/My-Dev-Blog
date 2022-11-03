import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import { Blog } from '../../../models';

type Data = {
    message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getBlogBySlug( req, res );
        default:
            return res.status(400).json({ message: 'Bad request' })
    }

};

const getBlogBySlug = async ( req: NextApiRequest, res: NextApiResponse ) => {
    await db.connect();
    const { slug } = req.query;
    const blog = await Blog.findOne({ slug }).lean();
    await db.disconnect();

    if ( !blog ) {
        return res.status(400).json({ message: 'Blog no encontrado' });
    }

    return res.status(200).json( blog );
}