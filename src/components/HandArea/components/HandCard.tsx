import { Box } from '@mantine/core';
import { memo } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { type ICard } from '@/types/Card';
import useStyles from '../style';

interface IProps {
  card: ICard;
  handleSelectCard: (id: number) => () => void;
  index: number;
}

function HandCard({ card, handleSelectCard, index }: IProps) {
  const { classes } = useStyles();
  return (
    <Draggable draggableId={`${card.id}`} index={index}>
      {provided => (
        <Box
          key={card.id}
          className={`${classes.handCard} ${card.isSelect && 'active'}`}
          onClick={handleSelectCard(card.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <img src={card.cardImg} alt="Hand Card" width="100%" height="100%" />
        </Box>
      )}
    </Draggable>
  );
}

export default memo(HandCard);
