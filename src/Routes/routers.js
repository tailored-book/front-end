import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Index from "../pages/Index";
import ErrorPage from "../errors/error-page";
import { Body } from "../components/layout/layouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>, //useRouteError를 사용하여 NotFoundError처리;
    children: [
      {
        errorElement: <ErrorPage></ErrorPage>,
        children: [
          {
            index: true,
            element: <Index></Index>,
          },
          {
            path: "book/:bookId",
            element: <Body />,
          },
        ],
      },
    ],
  },
]);
