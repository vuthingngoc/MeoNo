import { Center, Flex } from '@mantine/core';
import CardArea from '@/components/CardArea';
import PlayerArea from '@/components/PlayerArea';
import useStyles from '../style';

export default function Desk() {
  const { classes } = useStyles();
  return (
    <Flex justify="center" align="center" className={classes.area}>
      <Center className={classes.desk}>
        <CardArea />
        <PlayerArea />
      </Center>
    </Flex>
  );
}
