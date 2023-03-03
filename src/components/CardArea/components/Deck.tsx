import { Box, Stack, Text } from '@mantine/core';
import BackCard from '@/assets/images/cardDeck/back_deck.jpg';
import useStyles from '../style';

export default function Deck() {
  const { classes } = useStyles();
  return (
    <Stack align="center" justify="center" spacing="xs">
      <Text className={classes.cardCount} fw={700}>
        Cards left: 3
      </Text>
      <Box className={classes.card}>
        <img src={BackCard} alt="Back of deck" width="100%" height="100%" />
      </Box>
    </Stack>
  );
}
