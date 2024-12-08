import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box } from '@mui/material';

export default function DatePickers() {
  return (
   <Box sx={{width: "20%"}}>
     <LocalizationProvider 
      dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'DatePicker',
          'MobileDatePicker',
          'DesktopDatePicker',
         
        ]}
      >
        <DemoItem label="Fecha Inicial">
          <DatePicker defaultValue={dayjs('2022-04-17')} />
        </DemoItem>
        
        <DemoItem label="Fecha Final">
          <DatePicker defaultValue={dayjs('2022-04-17')} />
        </DemoItem>

      </DemoContainer>
    </LocalizationProvider>
   </Box>
  );
}
