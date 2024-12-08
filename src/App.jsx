import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./Pages/Home/Home"
import Reports from './Pages/Reports/Reports';
import Login from './Pages/Login/Login';
import { WebsocketProvider } from './context/WebsocketContext';
import DatePickers from './Components/Layout/DatePicker/DatePicker';


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
    path: '/reports',
    element: <Reports/>,
  },
  {
    path: "/date",
    element: <DatePickers/>
  }
]);

export default function App() {
  return <RouterProvider router={myRouter} />;
}
