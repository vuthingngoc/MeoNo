import { createBrowserRouter, Outlet } from 'react-router-dom';
import USER_LAYOUT from './layouts/userPath';
import Error404 from './pages/Error404';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Outlet />,
      children: USER_LAYOUT.map(route => ({
        path: route.path,
        element: route.element,
      })),
    },
    {
      path: '*',
      element: <Error404 />,
    },
  ],
  {
    basename: '/',
  }
);

export default router;
