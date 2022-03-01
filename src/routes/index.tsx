// import MainView from '@components/MainView';
import PageNotFoundView from '@components/Lib/PageNotFoundView';
import React, { lazy, Suspense } from 'react';
import { RouteObject, useRoutes, Navigate } from 'react-router-dom';
import Loading from '@components/Lib/Loading';

// const Demo = lazy(() => import('@components/Demo'));

const Layout = () => (
  <Suspense fallback={<Loading />}>
    <MainLayout />
  </Suspense>
);

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '*',
        element: <Navigate to="/404" />,
      },
      { 
        path: '/',
        element: <MainView />
      },
      { 
        path: '404', 
        element: <PageNotFoundView />
      }
    ],
  }
];

const AppRoutes = () => useRoutes(routes);
export default AppRoutes;