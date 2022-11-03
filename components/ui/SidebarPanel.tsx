import { FC } from 'react';
import { Toolbar, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import InboxIcon from '@mui/icons-material/InboxOutlined';
import MailIcon from '@mui/icons-material/EmailOutlined';


export const SidebarPanel: FC = () => {
  return (
    <div style={{ paddingTop: '28px' }}>
      <Toolbar />
      <Typography variant='h4' mb={1}>Articulos</Typography>
      <Divider />
      <List>
        {['Todos', 'Tecnologias', 'Algoritmos'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  )
}
