import * as React from 'react';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import MoreVert from '@mui/icons-material/MoreVert';
import Edit from '@mui/icons-material/Edit';
import MenuButton from '@mui/joy/MenuButton';
import Dropdown from '@mui/joy/Dropdown';
import DownloadIcon from '@mui/icons-material/Download';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ModalForm from '../ModalForm/ModalForm';

export default function MoreOptions() {
  const [activeModalForm, setActiveModalForm] = React.useState(false);

  return (
    <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: 'outlined', color: 'neutral' } }}
        sx={{ marginRight: "10px"}}
      >
      
        <MoreVert />
      </MenuButton>
      <Menu placement="bottom-end">

        <MenuItem>
          <ListItemDecorator>
            <DownloadIcon sx={{color: "green"}} />
          </ListItemDecorator>{' '}
          Descargar Reporte
        </MenuItem>

        <MenuItem  onClick={() => {
    console.log('Abriendo modal');
    setActiveModalForm(true);
  }}>
          <ListItemDecorator>
            <DateRangeIcon sx={{color: "black"}} />
          </ListItemDecorator>{' '}
          Filtrar Por Fecha
        </MenuItem>

      


      </Menu>
      <ModalForm open={activeModalForm} setOpen={setActiveModalForm}/>
    </Dropdown>
  );
}
