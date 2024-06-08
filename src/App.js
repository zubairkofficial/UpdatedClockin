import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/landingPage/HomePage";
import Footer from "./layouts/Footer";
import Hero from "./components/landingPage/Hero";
import Scaling from "./components/download/Scaling";
import Header from "./layouts/Header";
import Loader from "./layouts/Loader.js";
import SearchBar from "./components/FAQs/SearchBar.jsx";
import { ThemeProvider } from "../src/layouts/ThemeContext.js";
import { ImageProvider } from '../src/layouts/ImageContext.js';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import ContactUS from "./components/support/ContactUS.jsx";
import Coming from "./components/comingsoon/Coming.jsx";
import Login from "./Admin/Auth/Login.jsx";
import Signup from "./Admin/Auth/Signup.jsx";
import Dashboard from "./Admin/Screens/Dashboard.jsx";
import ProtectedRoute from "./auth/ProtectedRoute.js";
import News from "./components/News/News.jsx";
import HomeScreen from "./Admin/Screens/HomeScreen.jsx";
import DownloadScreen from "./Admin/Screens/DownloadScreen.jsx";
import FeatureSection from "./Admin/Screens/Sections/FeatureSection.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/download",
    element: <Scaling />,
  },
  {
    path: "/coming",
    element: <Coming />,
  },
  {
    path: "/FAQs",
    element: <SearchBar />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/support",
    element: <ContactUS />,
  },
  {
    path: "/admin/login",
    element: <Login />,
  },
  {
    path: "/admin/signup",
    element: <Signup />,
  },
  {
    path: "/admin/dashboard",
    element: <ProtectedRoute element={<Dashboard />} />,
  },
  {
    path: "/admin/home",
    element: <ProtectedRoute element={<HomeScreen />} />,
  },
  {
    path: "/admin/download",
    element: <ProtectedRoute element={<DownloadScreen />} />,
  },
  {
    path: "/admin/feature",
    element: <ProtectedRoute element={<FeatureSection />} />,
  },
]);

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  });

  return (
    <ImageProvider>
      <ThemeProvider>
        <div>
          <div class="d-flex flex-column flex-root app-root" id="kt_app_root">
            <div
              class="app-page  flex-column flex-column-fluid "
              id="kt_app_page"
            >
              {loading ? (
                <Loader />
              ) : (
                <Layout>
                  <RouterProvider router={router} />
                </Layout>
              )}
            </div>
          </div>
        </div>
      </ThemeProvider>
    </ImageProvider>
  );
}

export default App;
