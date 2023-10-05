import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Login } from "../pages/Auth/Login/Login";
import { Singup } from "../pages/Auth/Singup/Singup";

export const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/auth",
      element: <Singup />,
    }
  ]);
  return <RouterProvider router={router} />;
}
