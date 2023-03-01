import Home from '@/pages/home';
import PRIVATE_PATHS from './privatePath';

const USER_LAYOUT = [
  {
    path: PRIVATE_PATHS.home,
    element: <Home />,
    title: 'Home',
  },
];

export default USER_LAYOUT;
