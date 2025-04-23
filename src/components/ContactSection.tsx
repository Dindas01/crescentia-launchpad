
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const AREAS = [
  "Indústria",
  "Comércio",
  "Serviços",
  "Turismo",
  "Tecnologia",
  "Outro",
];

const INTERESSES = [
  { value: "fundos", label: "Fundos e incentivos (PRR, Portugal 2030)" },
  { value: "estrategia", label: "Estratégia de negócio" },
  { value: "digitalizacao", label: "Digitalização e eficiência" },
  { value: "projetos", label: "Gestão de projetos" },
  { value: "outro", label: "Outro" },
];

const defaultMensagem =
  "Queres crescer com apoio estratégico? Diz-me como posso ajudar.";

const ContactSection = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    empresa: "",
    area: "",
    interesses: [] as string[],
    mensagem: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckbox = (value: string) => {
    setForm((prev) => ({
      ...prev,
      interesses: prev.interesses.includes(value)
        ? prev.interesses.filter((v) => v !== value)
        : [...prev.interesses, value],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de envio do formulário, API ou integração futura
    setSubmitted(true);
  };

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
            {!submitted ? (
              <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1 font-montserrat">
                    Nome<span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="nome"
                    name="nome"
                    type="text"
                    className="font-montserrat"
                    value={form.nome}
                    onChange={handleChange}
                    placeholder="João Silva"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-montserrat">
                    Email profissional<span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoCapitalize="off"
                    autoCorrect="off"
                    className="font-montserrat"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="joao@minhaempresa.pt"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-1 font-montserrat">
                    Nome da empresa
                  </label>
                  <Input
                    id="empresa"
                    name="empresa"
                    type="text"
                    className="font-montserrat"
                    value={form.empresa}
                    onChange={handleChange}
                    placeholder="Silva & Filhos, Lda"
                  />
                </div>
                <div>
                  <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1 font-montserrat">
                    Área de atividade
                  </label>
                  <select
                    id="area"
                    name="area"
                    className="font-montserrat w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-business-500 bg-white"
                    value={form.area}
                    onChange={handleChange}
                  >
                    <option value="">Seleciona uma opção</option>
                    {AREAS.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <span className="block text-sm font-medium text-gray-700 mb-1 font-montserrat">
                    Interesse principal
                  </span>
                  <div className="flex flex-col gap-2">
                    {INTERESSES.map((item) => (
                      <label key={item.value} className="flex items-center gap-2 font-montserrat">
                        <Checkbox
                          checked={form.interesses.includes(item.value)}
                          onCheckedChange={() => handleCheckbox(item.value)}
                          id={item.value}
                        />
                        <span>{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1 font-montserrat">
                    Mensagem
                  </label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    className="font-montserrat"
                    value={form.mensagem}
                    onChange={handleChange}
                    placeholder={defaultMensagem}
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-business-200 hover:bg-business-300 text-gray-900 font-semibold rounded-lg w-full font-montserrat text-base py-3 px-8 transition-colors duration-200 shadow-md"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Peça uma análise gratuita
                </Button>
              </form>
            ) : (
              <div className="text-center py-8">
                <h3 className="text-business-700 font-bold text-2xl font-montserrat mb-3">Obrigado pelo seu interesse!</h3>
                <p className="text-gray-700">Entraremos em contacto consigo em breve.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
