import { Center, Flex } from '@mantine/core';
import CardArea from '@/components/CardArea';
import useStyles from '../style';
import PlayerAvatar from './PlayerAvatar';

export default function Desk() {
  const { classes } = useStyles();
  return (
    <Flex justify="center" align="center" className={classes.area}>
      <Center className={classes.desk}>
        <CardArea />
        <PlayerAvatar className={classes.slot1} name="ME" />
        <PlayerAvatar className={classes.slot2} />
        <PlayerAvatar className={classes.slot3} />
        <PlayerAvatar className={classes.slot4} />
        <PlayerAvatar className={classes.slot5} />
      </Center>
    </Flex>
  );
}
