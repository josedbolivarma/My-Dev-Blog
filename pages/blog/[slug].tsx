import { Box, Card, Typography } from '@mui/material';
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Image from 'next/image';
import { BlogLayout } from '../../components/layout';
import { getBlogBySlug, getAllBlogSlugs } from '../../database/dbBlogs';
import { IBlog } from '../../interfaces';

interface Props {
  blog: IBlog;
}


const BlogPage: NextPage<Props> = ({ blog }) => {
  
  const { title, image, description, target } = blog;
  
  return (
    <BlogLayout title={`Blog - ${ blog.slug }`} description={`Blog - ${ blog.title }`}>
      <Card sx={{ padding: '3.8rem' }}>
      <Box display='flex' flexDirection='column' alignItems='left' gap={3} mb={4}>
          <Typography variant='h3'>Blog Page</Typography>
          <Typography variant='h4'>{ title }</Typography>
        </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
        
        <Image 
          src={ image[0] }
          alt={ title }
          width={1000}
          height={700}
        />

          <Typography variant='body1' fontSize={20}>{ description[0] }</Typography>
          <Typography variant='body1' fontSize={20}>{ description[1] }</Typography>
          <Typography variant='body1' fontSize={20}>{ description[2] }</Typography>

          <Typography variant='h3'>Objetivos y usos:</Typography>
          <Typography variant='body1' fontSize={20}>{ target[0] }</Typography>

      </Box>

      </Card>
    </BlogLayout>
  )
}


// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const slugs = await getAllBlogSlugs();

  return {
    paths: slugs.map(({slug}) => ({
      params: {
        slug
      }
    })),
    fallback: "blocking"
  }
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { slug = '' } = params as { slug: string };
  const blog = await getBlogBySlug(slug);

  if ( !blog ) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      blog
    },
    revalidate: 60 * 60 * 24
  }
}

export default BlogPage;