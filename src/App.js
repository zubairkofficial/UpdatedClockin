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
import HomeScreen from "./Admin/Screens/Images/HomeScreen.jsx";
import DownloadScreen from "./Admin/Screens/Images/DownloadScreen.jsx";
import FeatureSection from "./Admin/Screens/Sections/FeatureSection.js";
import FAQSection from "./Admin/Screens/FAQPage/FAQSection.js";
import AchievementSection from "./Admin/Screens/Sections/AchievementSection.js";
import PlanSection from "./Admin/Screens/Sections/PlanSection.js";
import NewsPageSection from "./Admin/Screens/NewsPage/NewsPageSection.js";
import NewsDetail from "./components/News/NewsDetail.jsx";
import SupportSection from "./Admin/Screens/Support/SupportSection.js";
import HomePageContent from "./Admin/Screens/Content/HomePageContent.js";
import FooterSection from "./Admin/Screens/Content/FooterSection.js";
import StatSectionContent from "./Admin/Screens/Content/StatSectionContent.js";
import DownloadPageContent from "./Admin/Screens/Content/DownloadPageContent.js";
import { LoadingProvider } from './layouts/LoadingContext';
import Helpers from "./layouts/LoadingContext";
import axios from "axios";
import PrivacyPageContent from "./Admin/Screens/Privacy/PrivacyPageContent.js";
import PrivacyPolicy from "./components/Privacy/PrivacyPolicy.js";
import TermPageContent from "./Admin/Screens/Privacy/TermPageContent.js";
import TermPage from "./components/Term/TermPage.js";
import SEOScreen from "./Admin/Screens/SEOPage/SEOScreen.jsx";
import { SEOProvider } from "./Config/SEOContext.js";
import NewPageScreen from "./Admin/Screens/Newpage/NewPageScreen.js";
import OptionSidebar from "./Admin/Screens/Newpage/OptionSidebar.js";
import DndContext from "./layouts/DndContext.js";

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
    path: "/privacy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/term",
    element: <TermPage />,
  },
  {
    path: "/news/:slug",
    element: <NewsDetail />,
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
  {
    path: "/admin/achievements",
    element: <ProtectedRoute element={<AchievementSection />} />,
  },
  {
    path: "/admin/plans",
    element: <ProtectedRoute element={<PlanSection />} />,
  },
  {
    path: "/admin/faqs",
    element: <ProtectedRoute element={<FAQSection />} />,
  },
  {
    path: "/admin/faqs",
    element: <ProtectedRoute element={<FAQSection />} />,
  },
  {
    path: "/admin/news",
    element: <ProtectedRoute element={<NewsPageSection />} />,
  },
  {
    path: "/admin/support",
    element: <ProtectedRoute element={<SupportSection />} />,
  },
  {
    path: "/admin/content",
    element: <ProtectedRoute element={<HomePageContent />} />,
  },
  {
    path: "/admin/footer",
    element: <ProtectedRoute element={<FooterSection />} />,
  },
  {
    path: "/admin/privacy",
    element: <ProtectedRoute element={<PrivacyPageContent />} />,
  },
  {
    path: "/admin/term",
    element: <ProtectedRoute element={<TermPageContent />} />,
  },
  {
    path: "/admin/stat",
    element: <ProtectedRoute element={<StatSectionContent />} />,
  },
  {
    path: "/admin/downloadsection",
    element: <ProtectedRoute element={<DownloadPageContent />} />,
  },
  {
    path: "/admin/seo",
    element: <ProtectedRoute element={<SEOScreen />} />,
  },
  {
    path: "/admin/newpage",
    element: <ProtectedRoute element={<OptionSidebar />} />,
  },
]);

function App() {
  return (
    <DndContext>
      <SEOProvider>
        <ThemeProvider>
          <div>
            <div class="d-flex flex-column flex-root app-root" id="kt_app_root">
              <div
                class="app-page  flex-column flex-column-fluid "
                id="kt_app_page"
              >
                <Layout>
                  <RouterProvider router={router} />
                </Layout>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </SEOProvider >
    </DndContext >
  );
}

export default App;
