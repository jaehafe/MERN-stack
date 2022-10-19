import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Users from './user/pages/Users';

const Layout = () => {
  return (
    <main>
      <MainNavigation />
      <Outlet />
    </main>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Users />,
      },
      {
        path: '/places/new',
        element: <NewPlace />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
