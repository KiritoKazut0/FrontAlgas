import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import MoreOpcions from '../List/List';
export default function EnhancedTableToolbar() {

    return (
      <Box
        sx={[
          {
            display: 'flex',
            justifyContent: "space-between",

            alignItems: 'center',
            py: 1,
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
            borderTopLeftRadius: 'var(--unstable_actionRadius)',
            borderTopRightRadius: 'var(--unstable_actionRadius)',
          }
        ]}
      >
       
          <Typography
            level="title-lg"
            id="tableTitle"
            component="div"
            style={{marginTop: "10px", marginLeft: "40px"}}
          >
            Tabla de Reportes 
          </Typography>

         
        <MoreOpcions/>
   
        
      </Box>
    );
  }
  