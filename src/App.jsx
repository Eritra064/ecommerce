import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./components/Navbar/Topbar.jsx";
import routeList from "./routes/routeList.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Suspense } from "react";

function App() {
  return (
    <>
      
      <Router>
      <Topbar />
        <Routes>
          {routeList.map((route, key) => (
            <Route path={route.url} element={
              <Suspense><route.component /></Suspense>
            } />
          ))}
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
