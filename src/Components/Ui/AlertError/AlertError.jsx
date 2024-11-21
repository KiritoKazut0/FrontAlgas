import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function AlertError({message}) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error" sx={{
        background: "none", color: "red"
      }}>{message}</Alert>
    </Stack>
  );
}