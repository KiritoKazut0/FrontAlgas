import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; 
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import DescriptionIcon from '@mui/icons-material/Description';  
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';


const mainListItems = [
  { text: 'Home', icon: <HomeRoundedIcon /> },
  { text: 'Analisis', icon: <AnalyticsRoundedIcon /> },
  { text: 'Usuarios', icon: <PeopleRoundedIcon /> },
  { text: 'Perfil', icon: <AccountCircleIcon /> }, 
  { text: 'Ajustes', icon: <SettingsRoundedIcon /> },
  { text: 'Soporte', icon: <InfoRoundedIcon /> },
  { text: 'Manual', icon: <DescriptionIcon /> },  
];



export default function MenuContent() {
  return (
    <Stack sx={{ flexGrow: 1 , justifyContent: 'space-between', padding: "30px 10px" }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton selected={index === 0}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

     
    </Stack>
  );
}
