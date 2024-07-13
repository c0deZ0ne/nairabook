import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function AppLoading() {
  return (
    <Box
      sx={{
        position: 'absolute',
        opacity: 0.8,
        alignSelf: 'center',
        zIndex: 100000000,

        top: '40%',
        left: '50%',
      }}
    >
      <CircularProgress />
    </Box>
  );
}
