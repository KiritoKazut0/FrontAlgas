import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PageViewsBarChart from '../PagesViewsByChar/PagesViewsByChar';
import SessionsChart from '../SessinsChat/SessionsChart';
import StatCard from "../StatCard/StatCard"
import dataReadings from '../../../Utils/data/dataReadings';

export default function App() {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Lecturas de los Sensores
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        {dataReadings.map((card, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
            <StatCard 
            key={index}
            data={card.data}
            interval={card.interval}
            title={card.title}
            trend={card.trend}
            value={card.value} />
          </Grid>
        ))}
        
        <Grid size={{ xs: 12, md: 6 }}>
          <SessionsChart />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <PageViewsBarChart />
        </Grid>
      </Grid>
      
    </Box>
  );
}
