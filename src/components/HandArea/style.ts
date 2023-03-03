import { createStyles } from '@mantine/core';

const useStyles = createStyles(theme => ({
  handArea: {
    justifyContent: 'center',
    position: 'fixed',
    bottom: theme.spacing.xl,
    gap: theme.spacing.xs,
    insetInline: 0,
  },
  handCard: {
    borderRadius: 10,
    aspectRatio: '11/16',
    flex: '0 1 200px',
    maxHeight: '20vh',
    overflow: 'hidden',
    transition: 'transform 0.25s',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-50px)',
    },
    '&.active': {
      transform: 'translateY(-50px)',
      border: `3px solid ${theme.colors.green[5]}`,
    },
    '&.inactive': {
      filter: 'grayscale(100%)',
      cursor: 'not-allowed',
    },
  },
}));

export default useStyles;
