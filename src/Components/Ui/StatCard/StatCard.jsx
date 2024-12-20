import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { areaElementClasses } from '@mui/x-charts/LineChart';
import hidrogeno from '/src/assets/hidrogeno.png'
import ph from '/src/assets/ph.png'
import oxigeno from '/src/assets/oxigeno.png'
import temperatura from '/src/assets/temperatura.png'
function getDaysInMonth(month, year) {
  const date = new Date(year, month, 0);
  const monthName = date.toLocaleDateString('en-US', {
    month: 'short',
  });
  const daysInMonth = date.getDate();
  const days = [];
  let i = 1;
  while (days.length < daysInMonth) {
    days.push(`${monthName} ${i}`);
    i += 1;
  }
  return days;
}

function AreaGradient({ color, id }) {
  return (
    <defs>
      <linearGradient id={id} x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity={0.3} />
        <stop offset="100%" stopColor={color} stopOpacity={0} />
      </linearGradient>
    </defs>
  );
}

export default function StatCard({
  title,
  value,
  interval,
  trend,
  data,
}) {
  const theme = useTheme();
  const daysInWeek = getDaysInMonth(4, 2024);

  const trendColors = {
    up:
      theme.palette.mode === 'dark'
        ? theme.palette.success.main
        : theme.palette.success.dark,
    down:
      theme.palette.mode === 'light'
        ? theme.palette.error.main
        : theme.palette.error.dark,
    neutral:
      theme.palette.mode === 'light'
        ? theme.palette.warning.main
        : theme.palette.grey[700],
      oxigeno:
        theme.palette.mode === 'light'
          ? theme.palette.info.main
          : theme.palette.primary.main,
  };

  const labelColors = {
    up: 'success' ,
    down: 'error',
    neutral: 'default'
  };

  const color = labelColors[trend];
  const chartColor = trendColors[trend];

  const trendValues = {
    up: (
      <Stack direction="row" alignItems="center" spacing={0.5}>
        <img src={hidrogeno} alt="up" style={{ width: 16, height: 16 }} />
    
      </Stack>
    ),
    down: (
      <Stack direction="row" alignItems="center" spacing={0.5}>
        <img src={temperatura} alt="down" style={{ width: 16, height: 16 }} />
        
      </Stack>
    ),
    neutral: (
      <Stack direction="row" alignItems="center" spacing={0.5}>
        <img src={ph} alt="neutral" style={{ width: 16, height: 16 }} />
        
      </Stack>
    ),
    oxigeno: (
      <Stack direction="row" alignItems="center" spacing={0.5}>
        <img src={oxigeno} alt="oxigeno" style={{ width: 16, height: 16 }} />
        
      </Stack>
    ),
  };
  


  return (
    <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
      <CardContent>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          {title}
        </Typography>
        
        <Stack
          direction="column"
          sx={{ justifyContent: 'space-between', flexGrow: '1', gap: 1 }}
        >
          <Stack sx={{ justifyContent: 'space-between' }}>
            <Stack
              direction="row"
              sx={{ justifyContent: 'space-between', alignItems: 'center' }}
            >
              <Typography variant="h4" component="p">
                {value}
              </Typography>
              <Chip size="small" label={trendValues[trend]} />

            </Stack>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              {interval}
            </Typography>
          </Stack>
          <Box sx={{ width: '100%', height: 50 }}>
            <SparkLineChart
              colors={[chartColor]}
              data={data}
              area
              showHighlight
              showTooltip
              xAxis={{
                scaleType: 'band',
                data: daysInWeek, // Use the correct property 'data' for xAxis
              }}
              sx={{
                [`& .${areaElementClasses.root}`]: {
                  fill: `url(#area-gradient-${value})`,
                },
              }}
            >
              <AreaGradient color={chartColor} id={`area-gradient-${value}`} />
            </SparkLineChart>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
