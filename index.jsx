import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Host/Items";
import ItemDetail from "./pages/Host/ItemDetail";
import Login from "./pages/Login";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostItems from "./pages/Host/HostItems";
import HostItemDetail from "./pages/Host/HostItemDetail";
import HostItemInfo from "./pages/Host/HostItemInfo";
import HostItemPricing from "./pages/Host/HostItemPricing";
import HostItemPhotos from "./pages/Host/HostItemPhotos";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import AuthRequired from "./components/AuthRequired";

function App() {
  /**
   * Challenge: Create the AuthRequired Layout Route to protect
   * all the /host routes.
   *
   * For now, just use `const authenticated = false`
   * to determine the authenticated status of the user, and
   * either send them to the /login route, or render the Outlet
   */

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="items" element={<Items />} />
          <Route path="items/:id" element={<ItemDetail />} />{" "}
          <Route path="login" element={<Login />} />
          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="items" element={<HostItems />} />{" "}
              <Route path="items/:id" element={<HostItemDetail />}>
                <Route index element={<HostItemInfo />} />
                <Route path="pricing" element={<HostItemPricing />} />
                <Route path="photos" element={<HostItemPhotos />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
