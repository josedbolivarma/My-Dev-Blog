
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Link from 'next/link';
import { ThemeChanger } from './ThemeChanger';
import { FC } from 'react';

export const Navbar: FC = () => {
  const handleDrawerToggle = () => {

  };
  return (
    <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={ handleDrawerToggle }
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuBookIcon />
          </IconButton>
          <Link href={'/'} >
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, cursor: 'pointer' }}
            >
              INICIO
            </Typography>
          </Link>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))} */}
              <ThemeChanger />
          </Box>
        </Toolbar>
      </AppBar>
  )
}
