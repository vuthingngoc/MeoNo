import PlayerAvatar from './components/PlayerAvatar';
import useStyles from './style';

export default function PlayerArea() {
  const { classes } = useStyles();
  return (
    <>
      <PlayerAvatar className={classes.slot1} name="ME" />
      <PlayerAvatar className={classes.slot2} />
      <PlayerAvatar className={classes.slot3} />
      <PlayerAvatar className={classes.slot4} />
      <PlayerAvatar className={classes.slot5} />
    </>
  );
}
