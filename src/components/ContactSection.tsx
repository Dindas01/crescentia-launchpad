
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import CallToActionButton from "./CallToActionButton";
import ModernContactButton from "./ModernContactButton";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";

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

const contactImg = "/lovable-uploads/eecc81b9-24e3-4934-8b13-b52dd184d679.png";

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
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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

  const trackPlausibleEvent = () => {
    if (
      typeof window !== "undefined" &&
      typeof (window as any).plausible === "function"
    ) {
      (window as any).plausible("Peça_analise_gratuita_click");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    trackPlausibleEvent();
    
    try {
      // Enviar dados para a edge function
      const response = await fetch(
        "https://jouidoxxiflwykkifnew.supabase.co/functions/v1/process-contact-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erro ao processar o formulário");
      }

      console.log("Formulário processado com sucesso:", result);
      setSubmitted(true);
      toast({
        title: "Formulário enviado com sucesso!",
        description: "Entraremos em contacto consigo em breve.",
        duration: 5000,
      });
    } catch (error) {
      console.error("Erro ao submeter formulário:", error);
      toast({
        title: "Erro ao enviar formulário",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
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
        <div className="text-center mb-8 max-w-xl mx-auto">
          <h3 className="font-norwester text-2xl md:text-3xl text-business-800 mb-1" style={{ fontFamily: "Norwester, Montserrat, sans-serif" }}>
            Peça uma Análise Gratuita
          </h3>
          <p className="font-montserrat text-lg text-gray-700">
            Receba uma avaliação personalizada sobre as melhores oportunidades de financiamento e crescimento para o seu negócio.
          </p>
        </div>
        <div
          className="flex flex-col md:flex-row-reverse items-stretch max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
          style={{
            boxShadow: "0 8px 32px 0 rgba(38, 70, 47, 0.09)",
            border: "1px solid #F2F8F2",
          }}
        >
          <div className="w-full md:w-5/12 min-h-[200px] max-h-[420px] flex items-center justify-center bg-business-50 border-b md:border-b-0 md:border-l overflow-hidden">
            <img
              src={contactImg}
              alt="Análise e consultoria empresarial"
              className="object-cover w-full h-48 md:h-full"
              loading="lazy"
              style={{
                minHeight: "190px",
                maxHeight: "420px",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="w-full md:w-7/12 flex items-center">
            <div className="p-6 md:p-10 w-full">
              {submitted ? (
                <div className="text-center py-8">
                  <h3 className="text-business-700 font-bold text-2xl font-montserrat mb-3">
                    Parabéns por dar o primeiro passo para crescer a sua Empresa
                  </h3>
                  <p className="text-gray-700">
                    Entraremos em contacto consigo em breve.
                  </p>
                </div>
              ) : (
                <form
                  className="space-y-6 md:space-y-7"
                  onSubmit={handleSubmit}
                  autoComplete="off"
                >
                  <div>
                    <label
                      htmlFor="nome"
                      className="block text-sm font-medium text-gray-700 mb-2 font-montserrat"
                    >
                      Nome<span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      className="font-montserrat h-11"
                      value={form.nome}
                      onChange={handleChange}
                      placeholder="João Silva"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2 font-montserrat"
                    >
                      Email profissional<span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      inputMode="email"
                      autoCapitalize="off"
                      autoCorrect="off"
                      className="font-montserrat h-11"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="joao@minhaempresa.pt"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="empresa"
                      className="block text-sm font-medium text-gray-700 mb-2 font-montserrat"
                    >
                      Nome da empresa
                    </label>
                    <Input
                      id="empresa"
                      name="empresa"
                      type="text"
                      className="font-montserrat h-11"
                      value={form.empresa}
                      onChange={handleChange}
                      placeholder="Silva & Filhos, Lda"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="area"
                      className="block text-sm font-medium text-gray-700 mb-2 font-montserrat"
                    >
                      Área de atividade
                    </label>
                    <select
                      id="area"
                      name="area"
                      className="font-montserrat w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-business-500 bg-white h-11"
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
                    <span className="block text-sm font-medium text-gray-700 mb-2 font-montserrat">
                      Interesse principal
                    </span>
                    <div className="flex flex-col gap-2">
                      {INTERESSES.map((item) => (
                        <label
                          key={item.value}
                          className="flex items-center gap-2 font-montserrat"
                        >
                          <Checkbox
                            checked={form.interesses.includes(item.value)}
                            onCheckedChange={() => handleCheckbox(item.value)}
                            id={item.value}
                            style={{
                              width: 16,
                              height: 16,
                              minWidth: 16,
                              minHeight: 16,
                              marginRight: 2,
                            }}
                            className="!w-4 !h-4"
                          />
                          <span className="text-sm">
                            {item.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="mensagem"
                      className="block text-sm font-medium text-gray-700 mb-2 font-montserrat"
                    >
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
                  <div>
                    <ModernContactButton disabled={loading}>
                      {loading ? "A processar..." : "Peça uma análise gratuita"}
                    </ModernContactButton>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @font-face {
          font-family: 'Norwester';
          src: url('/fonts/Norwester.otf') format('opentype');
          font-display: swap;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
