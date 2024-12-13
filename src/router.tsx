import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NeighborhoodPage } from './pages/NeighborhoodPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/guia-de-bairro/:slug',
    element: <NeighborhoodPage />,
  },
]);