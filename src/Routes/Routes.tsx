import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Login } from "../pages/Auth/Login/Login";
import { Singup } from "../pages/Auth/Singup/Singup";
import { Home } from "../pages/Home/Home";

export const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/auth",
      element: <Singup />,
    },
    {
      path: "/home",
      element: <Home />,
    }
  ], {
    basename: '/todo-list-online'
  });
  return <RouterProvider router={router} />;
}
