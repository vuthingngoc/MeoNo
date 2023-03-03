import { createStyles } from '@mantine/core';

const useStyles = createStyles(() => ({
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
