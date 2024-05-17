import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from "./components/landingPage/HomePage";
import Footer from "./layouts/Footer";
import Hero from "./components/landingPage/Hero";
import Scaling from "./components/download/Scaling";
import Header from "./layouts/Header";
import SearchBar from "./components/FAQs/SearchBar.jsx";
import { ThemeProvider } from '../src/layouts/ThemeContext.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import ContactUS from "./components/support/ContactUS.jsx";
import Coming from "./components/comingsoon/Coming.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    // loader: rootLoader,
  },
  {
    path: "/download",
    element: <Scaling />
  },
  {
    path: "/coming",
    element: <Coming />
  },
  {
    path: "/FAQs",
    element: <SearchBar />
  },
  {
    path: "/support",
    element: <ContactUS />
  }
]);


function App() {
  return (
    <ThemeProvider>
    <div className="App">
      <Layout>
       <RouterProvider router={router} />
      </Layout>
    </div>
    </ThemeProvider> 
  );
}

export default App;
