
import { Facebook, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-2 text-gray-900 mb-4 font-montserrat">
            Vamos falar sobre o futuro da tua empresa?
          </h2>
          <p className="text-lg text-gray-600">
            Quer estejas a começar um novo projeto ou a procurar novos caminhos para crescer, estou aqui para ajudar.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-business-500"
                  placeholder="O teu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-business-500"
                  placeholder="email@empresa.pt"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-business-500 resize-none"
                  placeholder="Como posso ajudar?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-primary w-full font-montserrat"
              >
                Enviar mensagem
              </button>
              <div className="flex flex-col items-center mt-4 space-y-2">
                <a
                  href="mailto:contacto@crescentia.pt"
                  className="text-business-600 underline font-medium"
                >
                  Enviar email direto
                </a>
                <a
                  href="https://wa.me/351910000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-business-600 underline font-medium"
                >
                  Contactar por WhatsApp
                </a>
                <div className="flex gap-3 mt-3">
                  <a href="https://instagram.com/" target="_blank" aria-label="Instagram">
                    <Instagram size={22} className="text-business-600 hover:text-business-800 transition-colors" />
                  </a>
                  <a href="https://facebook.com/" target="_blank" aria-label="Facebook">
                    <Facebook size={22} className="text-business-600 hover:text-business-800 transition-colors" />
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
