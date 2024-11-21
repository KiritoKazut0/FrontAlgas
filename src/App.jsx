import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import TableBorder from './Pages/Table';


const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <h1> hola mundo</h1>,
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
