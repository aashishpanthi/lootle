import { useRoutes } from "react-router-dom";

// layouts
import DefaultLayout from "./layouts/DefaultLayout";
import NavbarOnlyLayout from "./layouts/NavbarOnlyLayout";

//import other pages
import NotFound from "./pages/Page404";
import Home from "./pages/Home";
import DashboardApp from "./pages/DashboardApp";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [{ path: "", element: <Home /> }],
    },
    {
      path: "/app",
      element: <NavbarOnlyLayout />,
      children: [{ path: "dashboard", element: <DashboardApp /> }],
    },
    { path: "*", element: <NotFound /> },
  ]);
}
