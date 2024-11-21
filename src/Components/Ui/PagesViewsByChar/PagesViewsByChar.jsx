import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { BarChart } from '@mui/x-charts/BarChart';
import { generateStatistics } from '../../../Service/statistics/GraphicsBarra';
import CircularProgress from '@mui/joy/CircularProgress';
import { formatWeekData } from '../../../Utils/FormatDate/FormatWeek';
export default function PageViewsBarChart() {

  const [graphicsData, setGraphicsData] = React.useState({
    labels: [], data: [], promedio: 0
  });
  const [loading, setLoading] = React.useState(true);
  
  React.useEffect(() => {
    const fetchData = async () => {
      try { 
        const result = await generateStatistics();
        setLoading(false);
        const {data, labels, average}  = formatWeekData(result.data)
        setGraphicsData({
          data, labels, promedio: average
        })
        console.log({
          data, labels
        });
        
        
      } catch (error) {
        console.log(error); 
      }
    };

    fetchData(); 
  }, []);



  const chartData = {
    xAxis: [
      {
        scaleType: 'band',
        categoryGapRatio: 0.5,
        data: graphicsData.labels?.map(data => data),
      },
    ],
    series: [
      {
        id: 'hydrogen',
        label: 'Hydrogen',
        data: graphicsData.data?.map(data => data),
        stack: 'A',
      },
    ],
  };


  return (
    <Card variant="outlined" sx={{ width: '100%', height: "100%" }}>
      <CardContent>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          Produccion de Hidrogeno
        </Typography>
        <Stack sx={{ justifyContent: 'space-between' }}>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Datos Recopilados de esta Semana
          </Typography>
        </Stack>

     
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <CircularProgress />
          </div>
        ) : (

          <BarChart
          borderRadius={8}
          colors={['#2c6bc2']}
          xAxis={chartData.xAxis}
          series={chartData.series}
          height={400}
          margin={{ left: 50, right: 0, top: 20, bottom: 20 }}
          grid={{ horizontal: true }}
          slotProps={{
            legend: {
              hidden: true,
            },
          }}
        />

        )}

      </CardContent>
    </Card>
  );
}
