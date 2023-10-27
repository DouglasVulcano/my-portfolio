import { createBrowserRouter } from "react-router-dom";
import MainLayout from "commons/layouts/MainLayout";
import homeRoutes from "pages/HomePage/routes";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [...homeRoutes],
  },
]);

export default router;
