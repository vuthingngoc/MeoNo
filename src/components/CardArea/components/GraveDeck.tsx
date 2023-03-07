import { Stack, Text } from '@mantine/core';
import { Defused_card } from '@/assets/images';
import useStyles from '../style';

export default function GraveDeck() {
  const { classes } = useStyles();
  return (
    <Stack align="center" justify="center" spacing="xs">
      <Text className={classes.graveCount} fw={700}>
        Cards placed: 10
      </Text>
      <img className={classes.card} src={Defused_card.Defused_Card_1} alt="Card" />
    </Stack>
  );
}
