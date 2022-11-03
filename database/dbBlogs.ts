import { db } from "./";
import { IBlog } from "../interfaces";
import { Blog } from "../models";


export const getAllBlogs = async (): Promise<IBlog[]> => {
    await db.connect();
    const blogs = await Blog.find()
                                  .select('-_id')
                                  .lean();
    await db.disconnect();
    
    return JSON.parse( JSON.stringify(blogs) );
}

interface BlogSlug {
    slug: string;
}

export const getAllBlogSlugs = async (): Promise<BlogSlug[]> => {
    await db.connect();
    const slugs = await Blog
                          .find()
                          .select('slug -_id')
                          .lean();
    await db.disconnect();
    
    return slugs;
}

export const getBlogBySlug = async ( slug: string ): Promise<IBlog | null> => {
    await db.connect();
    const blog = await Blog.findOne({ slug })
        .lean();
    await db.disconnect();

    if ( !blog ) {
        return null;
    }

    return JSON.parse( JSON.stringify( blog ));
}

interface BlogSlug {
    slug: string;
}