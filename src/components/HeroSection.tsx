import { Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-blue via-brand-blue/95 to-brand-green/20 min-h-[calc(100vh-76px)] flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }} />
      </div>

      <div className="container-custom py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fadeInUp">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-brand-orange" />
              <span className="text-white text-sm font-semibold font-inter">Modelo Justo | Transparência Total</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-poppins">
              24 mil milhões de euros em incentivos.
              <span className="block text-brand-orange mt-2">O teu projeto pode ser o próximo.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-inter leading-relaxed">
              Transformamos a visão da tua empresa em financiamento aprovado. 
              Especialistas em Portugal 2030 e PRR. Risco partilhado, transparência total.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a
                href="#contact"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-10 py-4 text-lg font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 font-poppins inline-block"
              >
                Avaliar o Meu Projeto
              </a>
              <a
                href="#how-it-works"
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 px-10 py-4 text-lg font-bold rounded-lg backdrop-blur-sm transition-all hover:scale-105 font-poppins inline-block"
              >
                Como Funciona
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
