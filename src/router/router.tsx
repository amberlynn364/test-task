import { createBrowserRouter } from 'react-router-dom';
import RouterPath from './routerTypes';
import Main from '../pages/Main/Main';
import ErrorBoundary from '../pages/ErrorBoundary/ErrorBoundary';
import RepositoryDetails from '../pages/RepositoryDetails/RepositoryDetails';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const router = createBrowserRouter([
  {
    path: RouterPath.Main,
    element: <Main />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: RouterPath.RepositoryDetails,
    element: <RepositoryDetails />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: RouterPath.NotFoundPage,
    element: <NotFoundPage />,
  },
]);

export default router;
