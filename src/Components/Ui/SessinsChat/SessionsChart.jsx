import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import SelectSensors from "../Select/Select";

import {   
  LineChart,   
  Line,   
  XAxis,   
  CartesianGrid,   
  Tooltip,   
  Legend,   
  ResponsiveContainer, 
} from "recharts";

export default function SessionsChart() {

  const [historicalData, setHistoricalData] = React.useState([]);
  const [predictions, setPredictions] = React.useState([]);
  const [typeSensor, setTipeSensor] = React.useState('Hidrógeno')
  
  const extractHour = (dateString) => {
    const date = new Date(dateString);  
    const hours = date.getHours().toString().padStart(2, '0'); 
    const minutes = date.getMinutes().toString().padStart(2, '0'); 
    return `${hours}:${minutes}`; 
  };

  const transformDataForChart = (historicalData, predictions) => {
    const combinedData = [
      ...historicalData.map(data => ({
        time: extractHour(data.time),  
        value: data.value,
        type: 'Historical',
      })),
      ...predictions.map(prediction => ({
        time: extractHour(prediction.time),  
        value: prediction.value,
        type: 'Prediction',
      })),
    ];
  
    return combinedData;
  };

  const data = transformDataForChart(historicalData, predictions);
   
  return (
    <Card variant="outlined" sx={{ width: '100%' }}>
      <CardContent>
       <Stack sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}>
       <Typography variant="subtitle1" gutterBottom>
          Predicciones
        </Typography>
        <SelectSensors setPredictions={setPredictions} setHistoricalData={setHistoricalData} setTipeSensor={setTipeSensor}/>
       </Stack>
       
        <Stack sx={{ justifyContent: 'space-between' }}>
        
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            se generan apartir de las proximas 4 hrs
          </Typography>
        </Stack>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="time" 
              label={{ value: "Hora", position: "top" }} 
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="value"
              name={typeSensor}
              stroke="#FF6384"  
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
