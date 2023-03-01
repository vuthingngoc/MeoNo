import { Stack, Text } from '@mantine/core';
import CardImg from '@/assets/images/cardDeck/defused_1.png';
import useStyles from '../style';

export default function GraveDeck() {
  const { classes } = useStyles();
  return (
    <Stack align="center" justify="center" spacing="xs">
      <Text className={classes.graveCount} fw={700}>
        Cards placed: 10
      </Text>
      <img className={classes.card} src={CardImg} alt="Card" />
    </Stack>
  );
}
