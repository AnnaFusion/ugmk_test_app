import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Details = lazy(() => import('../pages/Details/Details'));
const Home = lazy(() => import('../pages/Home/Home'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

const routesConfig = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/details/:factoryId/:month',
    element: <Details />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routesConfig);

const Router = () => {
  return (
    <Suspense fallback={null}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Router;
