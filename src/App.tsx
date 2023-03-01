import { MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import router from './router';

function App() {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
