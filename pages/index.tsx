import type { NextPage } from 'next'
import { BlogList } from '../components/blog';
import { BlogLayout } from '../components/layout';
import { Grid, Typography } from '@mui/material';
import { SidebarPanel } from '../components/ui';

const HomePage: NextPage = () => {
  return (
    <BlogLayout title='Home - Page' description='My Best Blogs!'>
      <Typography variant='h2' textAlign='left' my={4} fontStyle='bold'>Blog News</Typography>
      <BlogList />
    </BlogLayout>
  )
}

export default HomePage;
