
import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { CookieConsentPopup } from "./components/CookieConsentPopup";

const App = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <CookieConsentPopup />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
