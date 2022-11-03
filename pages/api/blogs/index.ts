import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import { IBlog } from '../../../interfaces';
import { Blog } from '../../../models';

type Data = 
| { message: string }
| IBlog[];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch( req.method ) {
        case 'GET':
            return getBlogs( req, res );
        default: 
            return res.status(400).json({
                message: 'Bad request'
            });
    }

}

const getBlogs = async ( req: NextApiRequest, res: NextApiResponse ) => {
    let condition = {};

    await db.connect();
    const blogs = await Blog.find(condition)
                                .select('-_id')
                                .lean();
    await db.disconnect();

    return res.status(200).json( blogs );
}