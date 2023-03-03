import { useState } from 'react';
import { Flex, Box } from '@mantine/core';
import { Defused_Card_1, Defused_Card_2, Defused_Card_3, Defused_Card_4, Defused_Card_5 } from '@/assets/images';
import useStyles from './style';

export default function HandArea() {
  const [handCard, setHandCard] = useState([
    { id: 1, cardImg: Defused_Card_1, order: 1, isDefused: false, isExploded: true, isSelect: false },
    { id: 2, cardImg: Defused_Card_2, order: 2, isDefused: false, isExploded: false, isSelect: false },
    { id: 3, cardImg: Defused_Card_3, order: 3, isDefused: false, isExploded: false, isSelect: false },
    { id: 4, cardImg: Defused_Card_4, order: 4, isDefused: false, isExploded: false, isSelect: false },
    { id: 5, cardImg: Defused_Card_5, order: 5, isDefused: false, isExploded: false, isSelect: false },
  ]);
  const { classes } = useStyles();

  const handleSelectCard = (id: number) => () => {
    const newHandCard = handCard.map(card => {
      if (card.id === id) {
        return { ...card, isSelect: !card.isSelect };
      }
      return card;
    });
    setHandCard(newHandCard);
  };

  return (
    <Flex className={classes.handArea}>
      {handCard.map(card => (
        <Box
          key={card.id}
          className={`${classes.handCard} ${card.isSelect && 'active'}`}
          onClick={handleSelectCard(card.id)}
        >
          <img src={card.cardImg} alt="Hand Card" width="100%" height="100%" />
        </Box>
      ))}
    </Flex>
  );
}
