import type { NextPage } from 'next'
import { BlogLayout } from '../../components/layout';

const BlogPage: NextPage = () => {
  return (
    <BlogLayout title='Blog - Page' description='Blog - How To Learn React?'>
      <h1>Blog Page!!!</h1>
    </BlogLayout>
  )
}

export default BlogPage;
