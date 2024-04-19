import HomeLayout from "@layout/Layout";
import AllNews from "@reactrouterdom/AllNew";
import HomePage from "@reactrouterdom/HomePage";
import DetailNew from "@reactrouterdom/DetailNew";
import NotFound from "@reactrouterdom/NotFound";
import MainPage from "@reactrouterdom/MainPage";
import { createBrowserRouter } from "react-router-dom";
import WS011 from "../reactrouterdom/WS01";
import WS012 from "../reactrouterdom/WS02";
import WS013 from "../reactrouterdom/WS03";
import WS0132 from "../reactrouterdom/WS03-2";



const router = createBrowserRouter([
  {
    index: true,
    element: <MainPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: 'ws01',
    element: <WS011 />,

  },
  {
    path: 'ws02',
    element: <WS012 />,

  },
  {
    path: 'ws03',
    element: <WS013 />,

  },
  {
    path: 'ws032',
    element: <WS0132 />,

  },
  
  {
    path: "home",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "allnew",
        element: <AllNews />,
      },
      {
        path: "allnew/:allnewId",
        element: <AllNews />,
      },
      {
        path: 'ws01',
        element: <WS011 />,
    
      },
      {
        path: 'ws02',
        element: <WS012 />,
    
      },
      {
        path: 'ws03',
        element: <WS013 />,
    
      },
      {
        path: 'ws032',
        element: <WS0132 />,
    
      },

    ],
  },

]);

export default router;