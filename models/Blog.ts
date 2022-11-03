import mongoose, { Schema, model, Model } from 'mongoose';
import { IBlog } from '../interfaces';

const blogSchema = new Schema({
    title: { type: String, required: true },
    image: [{ type: String, required: true }],
    description: [{ type: String, required: true }],
    slug: { type: String, required: true },
    target: [{ type: String, required: true }]
},{
    timestamps: true
});


const Blog: Model<IBlog> = mongoose.models.Blog || model('Blog', blogSchema );

export default Blog;