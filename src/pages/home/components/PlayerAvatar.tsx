import { Avatar, Flex } from '@mantine/core';
import useStyles from '../style';

interface IProps {
  className: string;
  name?: string;
}
export default function PlayerAvatar({ name = '', className }: IProps) {
  const { classes } = useStyles();
  return (
    <Flex className={className}>
      <Avatar className={classes.avatar} radius="xl" size="xl">
        {name}
      </Avatar>
    </Flex>
  );
}
