import { Button } from "./ui/button";

const StickyMobileCTA = () => {
  const handleClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky-cta-mobile">
      <div className="container-custom px-4">
        <Button
          onClick={handleClick}
          className="w-full bg-brand-gold hover:bg-brand-gold/90 text-white font-bold py-4 text-base shadow-lg min-h-[52px] whitespace-nowrap overflow-visible max-w-full"
          size="lg"
        >
          Agendar Reunião →
        </Button>
        <p className="text-center text-xs text-brand-gray-dark mt-2">
          Resposta &lt; 24h | 913 960 220
        </p>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
