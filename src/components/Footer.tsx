
const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-gray-100 pt-14 pb-7 font-montserrat">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          {/* Sobre a Crescentia */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Sobre a Crescentia</h3>
            <div className="space-y-2">
              <p className="font-bold text-lg text-business-300">Crescentia Consultoria</p>
              <p className="text-gray-300 leading-relaxed">
                Consultoria de gestão especializada em fundos europeus, crescimento estratégico e transformação empresarial.
                Ajudamos PME portuguesas a crescer com apoio certo, no momento certo.
              </p>
            </div>
          </div>

          {/* Ligações Rápidas */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Ligações Rápidas</h3>
            <ul className="space-y-2 text-gray-300 text-base">
              <li>
                <a href="/" className="hover:text-business-300 transition-colors">Início</a>
              </li>
              <li>
                <a href="#about" className="hover:text-business-300 transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#services" className="hover:text-business-300 transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#blog" className="hover:text-business-300 transition-colors">Blog</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-business-300 transition-colors">Contactos</a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-business-300 transition-colors">Política de Privacidade</a>
              </li>
              <li>
                <a href="#terms" className="hover:text-business-300 transition-colors">Termos de Utilização</a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contacto</h3>
            <ul className="space-y-2 text-gray-300 text-base">
              <li>
                <span className="font-semibold text-gray-100">Email:</span> <a href="mailto:geral@crescentia.pt" className="hover:text-business-300 transition-colors">geral@crescentia.pt</a>
              </li>
              <li>
                <span className="font-semibold text-gray-100">Telefone:</span> <a href="tel:+351913960220" className="hover:text-business-300 transition-colors">+351 913960220</a>
              </li>
              <li>Porto, Portugal</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-[#343950] mt-10 pt-6">
        <div className="container-custom flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <div className="text-center md:text-left text-gray-400 text-sm mb-0">
            © 2025 Crescentia Consultoria. Todos os direitos reservados.
          </div>
          <div className="text-center md:text-right text-business-200 text-sm font-semibold">
            Onde a tua visão encontra direção.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

