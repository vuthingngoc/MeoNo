import { createStyles } from '@mantine/core';

const useStyles = createStyles(theme => ({
  deck: {
    position: 'absolute',
    top: '40%',
    left: '30%',
  },
  card: {
    borderRadius: 10,
    height: '25vh',
    overflow: 'hidden',
    aspectRatio: '11/16',
    cursor: 'pointer',
    ':hover': {
      border: `3px solid ${theme.colors.green[5]}`,
    },
  },
  cardCount: {
    fontSize: '2rem',
    color: 'black',
    background: '-webkit-linear-gradient(#f44336, #000000)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    cursor: 'default',
  },
  graveCount: {
    fontSize: '2rem',
    color: 'black',
    background: '-webkit-linear-gradient(#044400, #444444)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    cursor: 'default',
  },
}));

export default useStyles;
