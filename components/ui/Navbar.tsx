
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export const Navbar = () => {
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))} */}
            <Button sx={{ color: '#fff' }}>
                Home
              </Button>
          </Box>
        </Toolbar>
      </AppBar>
  )
}
