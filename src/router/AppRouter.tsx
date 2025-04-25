import { ROUTES } from "../constants/routes";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: ROUTES,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
