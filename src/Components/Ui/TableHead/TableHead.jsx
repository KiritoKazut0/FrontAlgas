import { headCells } from '../../../Utils/data/HeadCells';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { visuallyHidden } from '@mui/utils';
import Link from '@mui/joy/Link';
import Box  from '@mui/joy/Box';

export default function EnhancedTableHead({  order, orderBy, onRequestSort }) {
   

    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };

    
  
    return (
      <thead>
        <tr>
          <th> </th>
  
          {headCells.map((headCell) => {
            const active = orderBy === headCell.id;
            return (
              <th
                key={headCell.id}
                aria-sort={
                  active ? { asc: 'ascending', desc: 'descending' }[order] : undefined
                }
              >
                <Link
                  underline="none"
                  color="neutral"
                  textColor={active ? 'primary.plainColor' : undefined}
                  component="button"
                  onClick={createSortHandler(headCell.id)}
                  startDecorator={
                    headCell.numeric ? (
                      <ArrowDownwardIcon
                        sx={[active ? { opacity: 1 } : { opacity: 0 }]}
                      />
                    ) : null
                  }
                  endDecorator={
                    !headCell.numeric ? (
                      <ArrowDownwardIcon
                        sx={[active ? { opacity: 1 } : { opacity: 0 }]}
                      />
                    ) : null
                  }
                  sx={{
                    fontWeight: 'lg',
                    '& svg': {
                      transition: '0.2s',
                      transform:
                        active && order === 'desc' ? 'rotate(0deg)' : 'rotate(180deg)',
                    },
                    '&:hover': { '& svg': { opacity: 1 } },
                  }}
                >
                  {headCell.label}
                  {active ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                    </Box>
                  ) : null}
                </Link>
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }