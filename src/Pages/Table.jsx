import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Table from '@mui/joy/Table';
import Box from '@mui/material/Box';
import SideMenu from '../Components/Layout/SideMenu/SideMenu';
import AppNavbar from '../Components/Layout/AppNavbar/AppNavbar';

function calculateMode(arr) {
  const frequency = {};
  let maxFreq = 0;
  let mode = null;

  arr.forEach((value) => {
    frequency[value] = (frequency[value] || 0) + 1;
    if (frequency[value] > maxFreq) {
      maxFreq = frequency[value];
      mode = value;
    }
  });

  return mode;
}

function createData(name, hidrogeno, oxigeno, ph, temperatura, mediciones, count) {
  return { name, hidrogeno, oxigeno, ph, temperatura, mediciones, count };
}

const rows = [
  createData('Lunes', 159, 6.0, 24, 4.0, 0.6, 100),
  createData('Martes', 237, 9.0, 37, 4.3, 8.6, 120),
  createData('Miércoles', 262, 16.0, 24, 6.0, 5, 200),
  createData('Jueves', 305, 3.7, 67, 4.3, 7, 150),
  createData('Viernes', 356, 16.0, 49, 3.9, 6.5, 130),
  createData('Sábado', 356, 16.0, 49, 3.9, 6.5, 130),
  createData('Domingo', 356, 16.0, 49, 3.9, 6.5, 130),
];

export default function TableBorder() {
  const [borderAxis, setBorderAxis] = React.useState('Semana');
  const [data, setData] = React.useState([]);

  const selectDate = (event, newValue) => {
    console.log({  newValue });
    setBorderAxis(newValue);  
  };

  // Calcular las modas para las columnas
  const hidrogenoValues = rows.map((row) => row.hidrogeno);
  const oxigenoValues = rows.map((row) => row.oxigeno);
  const phValues = rows.map((row) => row.ph);
  const temperaturaValues = rows.map((row) => row.temperatura);

  const modaHidrogeno = calculateMode(hidrogenoValues);
  const modaOxigeno = calculateMode(oxigenoValues);
  const modaPh = calculateMode(phValues);
  const modaTemperatura = calculateMode(temperaturaValues);

  return (
    <Box sx={{ display: 'flex' }}>
      <SideMenu />
      <AppNavbar />

      <Box sx={{ width: '75%' }} margin={'2% 4%'}>
        <FormControl orientation="horizontal" sx={{ mb: 2, ml: 1 }}>
          <FormLabel>Reportes:</FormLabel>
          <Select
            size="sm"
            value={borderAxis}
            onChange={(event, newValue) => selectDate(event, newValue)} 
          >
            {['Día', 'Semana'].map((axis) => (
              <Option key={axis} value={axis}>
                {axis}
              </Option>
            ))}
          </Select>
        </FormControl>

        <Table sx={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead style={{ backgroundColor: '#ce813853' }}>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>Período</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Hidrogeno Ppm</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Oxigeno Ppm</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>PH</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Temperatura °C</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Mediciones</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Tipo</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.name} style={{ backgroundColor: index % 2 === 0 ? '#e0f3fc' : 'white' }}>
                <td style={{ border: '1px solid black', padding: '8px' }}>{row.name}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{row.hidrogeno}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{row.oxigeno}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{row.ph}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{row.temperatura}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{row.mediciones}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{borderAxis}</td>
              </tr>
            ))}

            <tr style={{ backgroundColor: '#57196b65' }}>
              <td style={{ border: '1px solid black', padding: '8px' }}>Moda</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{modaHidrogeno}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{modaOxigeno}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{modaPh}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{modaTemperatura}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}></td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{borderAxis}</td>
            </tr>
          </tbody>
        </Table>
      </Box>
    </Box>
  );
}
