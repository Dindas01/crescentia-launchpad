
import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { HelmetProvider } from "react-helmet-async";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { CookieConsentPopup } from "./components/CookieConsentPopup";

const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        <CookieConsentPopup />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
