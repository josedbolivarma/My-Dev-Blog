import type { NextPage } from 'next'
import { BlogList } from '../components/blog';
import { BlogLayout } from '../components/layout';
import { Grid, Typography } from '@mui/material';
import { SidebarPanel } from '../components/ui';

const HomePage: NextPage = () => {
  return (
    <BlogLayout title='Home - Page' description='My Best Blogs!'>
      <h1>Home Page!!!</h1>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8} lg={9} xl={10}>
          <BlogList />
        </Grid>
        <Grid item xs={2} sm={4} lg={3} xl={2} sx={{ display: { xs: 'none', md: 'block' } }}>
          <SidebarPanel />
        </Grid>
      </Grid>
    </BlogLayout>
  )
}

export default HomePage;
