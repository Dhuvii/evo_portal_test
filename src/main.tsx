import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Landing from "./pages/Landing";
import NavbarAndFooterLayout from "./layout/NavbarAndFooterLayout";
import PrivateRoutes from "./utilities/router/PrivateRoutes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<NavbarAndFooterLayout />}>
        <Route index element={<Landing />} />
        <Route path="about" element={<div>About</div>} />
      </Route>

      <Route element={<PrivateRoutes fallbackUrl="/" />}>
        <Route path="dashboard" element={<div>Dashboard</div>} />
      </Route>

      <Route
        path="*"
        element={
          <div className="">
            <p>404 not found</p> <Link to="/">return to home</Link>
          </div>
        }
      />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
