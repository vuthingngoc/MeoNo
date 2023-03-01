import { ActionIcon, Button, Flex } from '@mantine/core';
import { IconEye, IconMenu2 } from '@tabler/icons';

export default function Toolbar() {
  return (
    <Flex p="lg" justify="space-between" align="center" gap="lg">
      <Button color="red" variant="outline" leftIcon={<IconEye />}>
        Spectator
      </Button>
      <ActionIcon color="red" size="lg" radius="xl" variant="outline">
        <IconMenu2 size={26} />
      </ActionIcon>
    </Flex>
  );
}
