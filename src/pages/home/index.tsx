import { Container } from '@mantine/core';
import Desk from './components/Desk';
import Toolbar from '@/pages/home/components/Toolbar';
import useStyles from './style';
import HandArea from '@/components/HandArea';

export default function Home() {
  const { classes } = useStyles();
  return (
    <Container className={classes.container} size="lg" fluid>
      <Toolbar />
      <Desk />
      <HandArea />
    </Container>
  );
}
