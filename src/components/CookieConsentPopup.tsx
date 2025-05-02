
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// Add type declaration for gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export function CookieConsentPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if user already made a choice
    const consentGiven = localStorage.getItem("cookie-consent");
    if (!consentGiven) {
      // Only show popup if consent hasn't been given yet
      setOpen(true);
    } else {
      // If consent was previously given, initialize Google Analytics
      if (consentGiven === "accepted") {
        initializeGoogleAnalytics();
      }
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    initializeGoogleAnalytics();
    setOpen(false);
    
    // Send a specific event to track consent acceptance
    if (window.gtag) {
      window.gtag('event', 'cookie_consent_accepted', {
        'event_category': 'engagement',
        'event_label': 'Cookie Consent'
      });
      console.log("Evento de consentimento enviado para Google Analytics");
    }
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setOpen(false);
    console.log("Consentimento de cookies recusado");
  };

  const initializeGoogleAnalytics = () => {
    // Initialize Google Analytics
    if (window.gtag) {
      console.log("Google Analytics já está inicializado");
      return;
    }
    
    // Create script elements
    const gtagScript = document.createElement("script");
    gtagScript.async = true;
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-6XGWBVK4D3";
    
    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-6XGWBVK4D3', {
        send_page_view: true,
        cookie_flags: 'samesite=none;secure',
        anonymize_ip: true
      });
    `;
    
    // Append scripts to document
    document.head.appendChild(gtagScript);
    document.head.appendChild(inlineScript);
    
    // Listen for script load to verify initialization
    gtagScript.onload = () => {
      console.log("Google Analytics carregado com sucesso");
      
      // Send a test event after a short delay to ensure everything is initialized
      setTimeout(() => {
        if (window.gtag) {
          window.gtag('event', 'ga_initialized', {
            'event_category': 'system',
            'event_label': 'GA Initialization'
          });
          console.log("Evento de teste enviado para Google Analytics");
        }
      }, 1000);
    };
    
    gtagScript.onerror = () => {
      console.error("Erro ao carregar Google Analytics");
    };
    
    console.log("Google Analytics inicializado após consentimento");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Política de Cookies</DialogTitle>
          <DialogDescription className="pt-4 text-sm text-muted-foreground">
            Este site utiliza cookies para melhorar sua experiência de navegação. Os cookies nos ajudam 
            a entender como você interage com o site, permitindo-nos melhorar continuamente nossos serviços.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <p className="text-sm">
            Ao aceitar, você concorda com o uso de cookies analíticos que nos ajudarão a melhorar o site.
            Suas informações serão tratadas de acordo com nossa política de privacidade.
          </p>
        </div>
        
        <DialogFooter className="sm:justify-between flex-col gap-2 sm:flex-row">
          <Button variant="outline" onClick={handleDecline} className="mt-2 sm:mt-0">
            Recusar
          </Button>
          <Button onClick={handleAccept} className="bg-business-600 hover:bg-business-700 text-white">
            Aceitar cookies
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
