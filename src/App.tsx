import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Subscribe from "./pages/Subscribe";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/about-us"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />

        <Route
          path="/subscribe"
          element={
            <Layout>
              <Subscribe />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
