import { ChartBar, Users } from "lucide-react";
const HeroSection = () => {
  return <section className="bg-gradient-to-br from-gray-50 to-business-50 min-h-[calc(100vh-76px)] flex items-center">
      <div className="container-custom py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUp">
            <h1 className="heading-1 text-gray-900 mb-6 font-montserrat">
              Faz crescer o teu negócio com estratégia e financiamento inteligente.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Na Crescentia, ajudamos pequenas e médias empresas portuguesas a aceder a fundos europeus como o Portugal 2030 e o PRR, melhorar a eficiência operacional e crescer com visão. A nossa missão é simples: potenciar o teu negócio com soluções práticas, estratégicas e sustentáveis.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Marca a tua consulta gratuita e descobre o que podemos conquistar juntos.
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:gap-6 animate-fadeInUp animate-delay-200">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <ChartBar className="text-business-600 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-2">Apoio na Obtenção de Fundos e Incentivos</h3>
              <p className="text-gray-600">Develop roadmaps for sustainable business growth</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <Users className="text-business-600 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-2">Team Development</h3>
              <p className="text-gray-600">Build high-performing teams that drive success</p>
            </div>
            
            <div className="bg-business-600 text-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-xl mb-2">95%</h3>
              <p className="text-white/90">Client satisfaction rate across our services</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-xl mb-2">Business Impact</h3>
              <p className="text-gray-600">Transforming challenges into opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
