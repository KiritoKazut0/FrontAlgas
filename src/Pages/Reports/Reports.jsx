import * as React from 'react';
import Box from '@mui/material/Box';
import SideMenu from '../../Components/Layout/SideMenu/SideMenu';
import Tables from '../../Components/Ui/Table/Table';

export default function Reports() {
  return (
    <Box sx={{ display: 'flex', width: "100%" }}>
      <SideMenu />
      <Tables/>
    </Box>
  );
}

