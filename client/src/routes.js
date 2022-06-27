import { useRoutes } from "react-router-dom";

// layouts
import DefaultLayout from "./layouts/DefaultLayout";
import NavbarOnlyLayout from "./layouts/NavbarOnlyLayout";

//import other pages
import NotFound from "./pages/Page404";
import Home from "./pages/Home";

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
      children: [{ path: "app", element: <Home /> }],
    },
    { path: "*", element: <NotFound /> },
  ]);
}
