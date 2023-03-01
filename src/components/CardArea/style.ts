import { createStyles } from '@mantine/core';

const useStyles = createStyles(() => ({
  deck: {
    position: 'absolute',
    top: '40%',
    left: '30%',
  },
  card: {
    borderRadius: 25,
    height: '25vh',
    aspectRatio: '5/6',
    cursor: 'pointer',
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
