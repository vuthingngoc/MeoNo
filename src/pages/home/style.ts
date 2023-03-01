import { createStyles } from '@mantine/core';

const useStyles = createStyles(theme => ({
  container: {
    backgroundImage: "url('https://www.mattnorman.com/wp-content/uploads/2018/06/spotlight2.jpg')",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
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
  avatar: {
    cursor: 'pointer',
    backdropFilter: 'blur(10px)',
    border: '3px solid black',
  },
  slot1: {
    position: 'absolute',
    bottom: '-5%',
    left: '50% - theme.spacing.xl',
  },
  slot2: {
    position: 'absolute',
    bottom: '10%',
    right: '10%',
  },
  slot3: {
    position: 'absolute',
    top: '10%',
    right: '10%',
  },
  slot4: {
    position: 'absolute',
    bottom: '10%',
    left: '10%',
  },
  slot5: {
    position: 'absolute',
    top: '10%',
    left: '10%',
  },
}));

export default useStyles;
