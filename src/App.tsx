
import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { HelmetProvider } from "react-helmet-async";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LeadsManagement from "./pages/LeadsManagement";
import AuthPage from "./pages/AuthPage";
import { CookieConsentPopup } from "./components/CookieConsentPopup";
import { Toaster } from "./components/ui/toaster";

const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        <CookieConsentPopup />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/admin/leads" element={<LeadsManagement />} />
          <Route path="/leads" element={<LeadsManagement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
