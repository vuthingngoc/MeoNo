import { createStyles } from '@mantine/core';

const useStyles = createStyles(theme => ({
  container: {
    backgroundImage: "url('https://www.mattnorman.com/wp-content/uploads/2018/06/spotlight2.jpg')",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
  },
  area: {
    padding: theme.spacing.xl,
    height: '80vh',
  },
  desk: {
    position: 'relative',
    background: 'linear-gradient(to right top, #3584fbcc, #2878e4cc, #1b6ccdcc, #0d60b7cc, #0054a1cc);',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: theme.spacing.xl,
    margin: theme.spacing.xl,
    borderRadius: '50%',
    height: '60vh',
    border: '2px solid white',
    aspectRatio: '14/9',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 0 10px 0 white',
    '&:before': {
      zIndex: -1,
      boxShadow: '0 0 10px 0 white',
      border: '2px solid white',
      position: 'absolute',
      content: '""',
      inset: 30,
      background: 'linear-gradient(to right top, #48b97ecc, #52bf7ecc, #5cc47ecc, #66ca7dcc, #70cf7dcc);;',
      borderRadius: '50%',
      top: '2vh',
    },
  },
}));

export default useStyles;
