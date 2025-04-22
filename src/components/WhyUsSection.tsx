
import { CircleCheck, Lightbulb, Handshake, ListCheck, ChartLine } from 'lucide-react';

const WhyUsSection = () => {
  const reasons = [
    {
      id: 1,
      icon: Lightbulb,
      title: 'Industry Expertise',
      description: 'Our consultants bring decades of experience across multiple industries and specializations.'
    },
    {
      id: 2,
      icon: Handshake,
      title: 'Client Partnership',
      description: 'We form true partnerships with our clients, fully understanding your unique challenges.'
    },
    {
      id: 3,
      icon: ListCheck,
      title: 'Actionable Solutions',
      description: 'We deliver practical, implementable strategies with clear roadmaps for success.'
    },
    {
      id: 4,
      icon: ChartLine,
      title: 'Results-Focused',
      description: 'Our success is measured by your success – we\'re committed to delivering tangible outcomes.'
    }
  ];

  return (
    <section id="why-us" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-2 text-gray-900 mb-6">Why Choose Stellar Growth?</h2>
            <p className="text-lg text-gray-600 mb-8">
              We are not just consultants; we are your growth partners. Our approach combines deep expertise, 
              tailored solutions, and a relentless focus on delivering measurable results.
            </p>
            
            <ul className="space-y-4">
              {[
                'Personalized strategies tailored to your business goals',
                'Data-driven approach to problem-solving',
                'Continuous support throughout implementation',
                'Transparent communication and reporting'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CircleCheck className="text-business-600 mt-1 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason) => (
              <div 
                key={reason.id} 
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <reason.icon size={32} className="text-business-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
