import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import TableBorder from './Pages/Table';
import Login from './Pages/Login';
import { WebsocketProvider } from './context/WebsocketContext';

const WebsocketLayout = ({children}) => {
  return (
    <WebsocketProvider> {children} </WebsocketProvider>
  )
}



const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <Login/>,
  },
  {
    path: '/home',
    element: (
      <WebsocketLayout>
        <Home/>
      </WebsocketLayout>
    ),
  },
  {
    path: '/analisis',
    element: <TableBorder />,
  },
]);

export default function App() {
  return <RouterProvider router={myRouter} />;
}
