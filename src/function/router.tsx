import HomeLayout from "@layout/Layout";
import AllNews from "@reactrouterdom/AllNew";
import HomePage from "@reactrouterdom/HomePage";
import DetailNew from "@reactrouterdom/DetailNew";
import NotFound from "@reactrouterdom/NotFound";
import MainPage from "@reactrouterdom/MainPage";
import { createBrowserRouter } from "react-router-dom";

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
        path: "allnew/:allnewId/:allnewDetailId",
        element: <DetailNew />,
      },
    ],
  },

]);

export default router;