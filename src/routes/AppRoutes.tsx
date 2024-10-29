import { Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import Login from '../components/authentication/Login';
import AuthLayout from '../components/shared/layout/AuthLayout/AuthLayout';
import ErrorLayout from '../components/shared/layout/AuthLayout/ErrorLayout';
import ErrorPage401 from '../error-pages/ErrorPage401';
import ErrorPage403 from '../error-pages/ErrorPage403';
import ErrorPage404 from '../error-pages/ErrorPage404';
import SignIn from '../components/authentication/SigIn';

const AppRoutes = () => {
  const ErrorRoutes: RouteObject = {
    path: '',
    element: <ErrorLayout />,
    children: [
      { path: '/Error401', element: <ErrorPage401 /> },
      { path: '/Error403', element: <ErrorPage403 /> },
      { path: '/Error404', element: <ErrorPage404 /> },
      { path: '*', element: <ErrorPage404 /> },
    ],
  };

  const LoginRoutes: RouteObject = {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/', element: <Login /> },

      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/sigIn',
        element: <SignIn />,
      },
    ],
  };

  const router = useRoutes([LoginRoutes, ErrorRoutes]);
  return <Suspense>{router}</Suspense>;
};

export default AppRoutes;
