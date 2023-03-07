import { Flex } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import { useCallback } from 'react';
import { DragDropContext, Droppable, type DropResult } from 'react-beautiful-dnd';
import { Defused_card } from '@/assets/images';
import HandCard from './components/HandCard';
import useStyles from './style';

export default function HandArea() {
  const [state, handlers] = useListState([
    {
      id: 1,
      cardImg: Defused_card.Defused_Card_1,
      isDefused: false,
      isExploded: false,
      isSelect: false,
    },
    {
      id: 2,
      cardImg: Defused_card.Defused_Card_2,
      isDefused: false,
      isExploded: false,
      isSelect: false,
    },
    {
      id: 3,
      cardImg: Defused_card.Defused_Card_3,
      isDefused: false,
      isExploded: false,
      isSelect: false,
    },
    {
      id: 4,
      cardImg: Defused_card.Defused_Card_4,
      isDefused: false,
      isExploded: false,
      isSelect: false,
    },
    {
      id: 5,
      cardImg: Defused_card.Defused_Card_5,
      isDefused: false,
      isExploded: false,
      isSelect: false,
    },
  ]);
  const { classes } = useStyles();

  const handleSelectCard = (id: number) => () => {
    const newHandCard = state.map(card => {
      if (card.id === id) {
        return { ...card, isSelect: !card.isSelect };
      }
      return card;
    });
    handlers.setState(newHandCard);
  };

  const onDragEng = useCallback((result: DropResult) => {
    const { destination, source } = result;
    if (!destination?.droppableId) {
      return;
    }
    handlers.reorder({ from: source.index, to: destination?.index ?? 0 });
  }, []);

  return (
    <DragDropContext onDragEnd={onDragEng}>
      <Droppable droppableId="HandCardsList" direction="horizontal">
        {provided => (
          <Flex className={classes.handArea} ref={provided.innerRef} {...provided.droppableProps}>
            {state.map((card, index) => (
              <HandCard key={card.id} handleSelectCard={handleSelectCard} card={card} index={index} />
            ))}
            {provided.placeholder}
          </Flex>
        )}
      </Droppable>
    </DragDropContext>
  );
}
