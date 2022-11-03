import NextLink from 'next/link';
import { Grid, Card, CardMedia, CardActionArea, Link, Box, Typography } from '@mui/material';
import { FC } from 'react';
import { IBlog } from '../../interfaces';

interface Props {
    blog: IBlog;
}

export const BlogCard: FC<Props> = ({ blog }) => {
  return (
    // lg={4} Breakpoint
    <Grid item xs={12} sm={6}>
            <Card>
                <NextLink href={`/blog/${ blog.slug }`} passHref>
                    <Link>
                    <CardActionArea>
                <CardMedia 
                component='img'
                height='280'
                image={blog.image[0]}
                alt='React'
                />
                </CardActionArea>
                    </Link>
                </NextLink>
                <Box p={2}>
                    <Typography variant='h5' textAlign='center' mb={2} fontWeight={700}>{ blog.title }</Typography>
                    <Typography variant='subtitle1' fontSize={19}>{ blog.description[0].slice(0, 140) }...</Typography>
                    <Typography variant='subtitle2' my={2} fontSize={16}>en octubre 14, 2022</Typography>
                    <Box display='flex' justifyContent='space-between' alignItems='center' mt={2}>
                        <Box display='flex' alignItems='center' gap={3}>
                            <Typography variant='subtitle2' fontSize={16}>Comments</Typography>
                            <Typography variant='subtitle2' fontSize={16}>Likes</Typography>
                        </Box>
                    <Typography variant='subtitle2' fontSize={16}>Shared</Typography>
                    </Box>
                </Box>
            </Card>
        </Grid>
  )
}
