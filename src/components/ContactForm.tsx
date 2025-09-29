import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { z } from "zod";

// Enhanced validation schema with security best practices
const contactSchema = z.object({
  nome: z.string()
    .trim()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome não pode exceder 100 caracteres")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Nome contém caracteres inválidos"),
  
  email: z.string()
    .trim()
    .email("Email inválido")
    .max(255, "Email não pode exceder 255 caracteres")
    .toLowerCase(),
  
  empresa: z.string()
    .trim()
    .max(200, "Nome da empresa não pode exceder 200 caracteres")
    .optional(),
  
  area: z.string()
    .trim()
    .max(100, "Área não pode exceder 100 caracteres")
    .optional(),
  
  mensagem: z.string()
    .trim()
    .max(2000, "Mensagem não pode exceder 2000 caracteres")
    .optional(),
  
  interesses: z.array(z.string()).optional(),
});

interface ContactFormProps {
  onSubmit?: (data: any) => void;
  className?: string;
}

const ContactForm = ({ onSubmit, className }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: "",
    area: "",
    mensagem: "",
    interesses: [] as string[],
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interesses: checked
        ? [...prev.interesses, interest]
        : prev.interesses.filter(i => i !== interest)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);

      // Submit to edge function with validated data
      const response = await fetch(
        "https://jouidoxxiflwykkifnew.supabase.co/functions/v1/process-contact-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(validatedData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Erro ao enviar formulário");
      }

      // Success
      toast({
        title: "Formulário enviado com sucesso!",
        description: "Entraremos em contacto brevemente.",
      });

      // Reset form
      setFormData({
        nome: "",
        email: "",
        empresa: "",
        area: "",
        mensagem: "",
        interesses: [],
      });

      // Call parent onSubmit if provided
      if (onSubmit) {
        onSubmit(validatedData);
      }

    } catch (error) {
      if (error instanceof z.ZodError) {
        // Show validation errors
        const firstError = error.errors[0];
        toast({
          title: "Dados inválidos",
          description: firstError.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Erro ao enviar formulário",
          description: error instanceof Error ? error.message : "Tente novamente mais tarde",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const interessesOptions = [
    { value: "fundos", label: "Fundos e incentivos" },
    { value: "estrategia", label: "Estratégia de negócio" },
    { value: "digitalizacao", label: "Digitalização" },
    { value: "projetos", label: "Gestão de projetos" },
    { value: "outro", label: "Outro" },
  ];

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
            Nome *
          </label>
          <Input
            id="nome"
            name="nome"
            type="text"
            value={formData.nome}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
            placeholder="O seu nome completo"
            maxLength={100}
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
            placeholder="seu@email.com"
            maxLength={255}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
            Empresa
          </label>
          <Input
            id="empresa"
            name="empresa"
            type="text"
            value={formData.empresa}
            onChange={handleInputChange}
            disabled={isSubmitting}
            placeholder="Nome da sua empresa"
            maxLength={200}
          />
        </div>
        
        <div>
          <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-2">
            Área de atividade
          </label>
          <Input
            id="area"
            name="area"
            type="text"
            value={formData.area}
            onChange={handleInputChange}
            disabled={isSubmitting}
            placeholder="Ex: Tecnologia, Comércio, etc."
            maxLength={100}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Interesses (selecione todos os que se aplicam)
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {interessesOptions.map((option) => (
            <label key={option.value} className="flex items-center space-x-3">
              <input
                type="checkbox"
                value={option.value}
                checked={formData.interesses.includes(option.value)}
                onChange={(e) => handleInterestChange(option.value, e.target.checked)}
                disabled={isSubmitting}
                className="h-4 w-4 text-business-600 focus:ring-business-500 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
          Mensagem
        </label>
        <Textarea
          id="mensagem"
          name="mensagem"
          value={formData.mensagem}
          onChange={handleInputChange}
          disabled={isSubmitting}
          placeholder="Descreva o seu projeto ou necessidades..."
          rows={4}
          maxLength={2000}
        />
        <div className="text-xs text-gray-500 mt-1">
          {formData.mensagem.length}/2000 caracteres
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? "A enviar..." : "Enviar Solicitação"}
      </Button>
    </form>
  );
};

export default ContactForm;