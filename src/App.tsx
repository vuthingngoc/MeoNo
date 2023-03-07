import { MantineProvider } from '@mantine/core';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd/dist/core';
import { RouterProvider } from 'react-router-dom';
import router from './router';

function App() {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <DndProvider backend={HTML5Backend}>
        <RouterProvider router={router} />
      </DndProvider>
    </MantineProvider>
  );
}

export default App;
