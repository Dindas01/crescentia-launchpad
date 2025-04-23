
import { Whatsapp } from "lucide-react";

const whatsappUrl = "https://wa.me/351912345678";

const FloatingWhatsappButton = () => (
  <a
    href={whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar via WhatsApp"
    className="fixed z-50 right-5 bottom-5 md:right-8 md:bottom-8"
    style={{ textDecoration: "none" }}
  >
    <button
      type="button"
      className="
        flex items-center justify-center
        rounded-full shadow-xl
        transition-transform duration-200 hover:scale-105
        focus:outline-none
        bg-[#25D366]
      "
      style={{
        width: "60px",
        height: "60px",
        boxShadow: "0 4px 16px 0 rgba(40,70,50,0.13)",
      }}
    >
      <Whatsapp className="text-white w-8 h-8" />
    </button>

    {/* Responsividade para tamanho em desktop */}
    <style>{`
      @media (min-width: 768px) {
        button {
          width: 50px !important;
          height: 50px !important;
        }
        .lucide-whatsapp {
          width: 28px !important;
          height: 28px !important;
        }
      }
    `}</style>
  </a>
);

export default FloatingWhatsappButton;
