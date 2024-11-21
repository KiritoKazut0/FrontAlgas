import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import TableBorder from './Pages/Table';
import Login from './Pages/Login';

const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <Login/>,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/analisis',
    element: <TableBorder />,
  },
]);

export default function App() {
  return <RouterProvider router={myRouter} />;
}
