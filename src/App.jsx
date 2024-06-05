import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./components/Navbar/Topbar.jsx";
import routeList from "./routes/routeList.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Suspense } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <>
      <Topbar />
      <Routes>
        {routeList.map((route, key) => (
          <Route
            path={route.url}
            element={
              <Suspense>
                <route.component />
              </Suspense>
            }
          />
        ))}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
