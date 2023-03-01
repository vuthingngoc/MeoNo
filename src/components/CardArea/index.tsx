import { SimpleGrid } from '@mantine/core';
import Deck from './components/Deck';
import GraveDeck from './components/GraveDeck';

export default function CardArea() {
  return (
    <SimpleGrid cols={2} spacing="xl" p="lg">
      <Deck />
      <GraveDeck />
    </SimpleGrid>
  );
}
