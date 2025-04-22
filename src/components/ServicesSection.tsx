import { ChartBar, Users, Briefcase, ChartLine, DollarSign, Building } from 'lucide-react';
const services = [{
  id: 1,
  title: 'Strategic Planning',
  description: 'Develop comprehensive business strategies to achieve your growth objectives and outperform competitors.',
  icon: ChartBar
}, {
  id: 2,
  title: 'Operational Excellence',
  description: 'Streamline operations, reduce costs, and enhance productivity through process optimization.',
  icon: Building
}, {
  id: 3,
  title: 'Financial Advisory',
  description: 'Expert financial guidance to improve profitability, manage cash flow, and make sound investment decisions.',
  icon: DollarSign
}, {
  id: 4,
  title: 'Market Expansion',
  description: 'Identify new market opportunities and develop entry strategies to expand your business reach.',
  icon: ChartLine
}, {
  id: 5,
  title: 'Leadership Development',
  description: 'Build strong leadership capabilities within your organization to drive long-term success.',
  icon: Users
}, {
  id: 6,
  title: 'Merger & Acquisition',
  description: 'Strategic advice on corporate transactions to maximize value and minimize risks.',
  icon: Briefcase
}];
const ServicesSection = () => {
  return <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">Os Nossos Serviços</h2>
          <p className="text-lg text-gray-600">Na Crescentia oferecemos soluções integradas para PME’s que querem crescer, inovar e conquistar novos mercados. Com foco nos fundos europeus, digitalização e estratégia empresarial, os nossos serviços são o ponto de partida para transformar o futuro do seu negócio.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => <div key={service.id} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-business-50 rounded-lg flex items-center justify-center mb-4">
                <service.icon size={24} className="text-business-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ServicesSection;