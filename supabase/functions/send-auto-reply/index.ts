
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@1.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Initialize Resend with the API key
const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { nome, email, empresa, area, interesses } = await req.json();
    
    console.log("Enviando email de confirmação para:", email, "Nome:", nome);

    // Formatar o array de interesses para exibição no email
    const interessesText = interesses && interesses.length > 0
      ? interesses.join(", ")
      : "Não especificados";
    
    // Construir o HTML do email de confirmação
    const emailHtml = `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          h2 { color: #2a6444; margin-bottom: 20px; }
          .info-item { margin-bottom: 15px; }
          .info-label { font-weight: bold; color: #2a6444; }
          .footer { margin-top: 30px; font-size: 14px; color: #555; border-top: 1px solid #eee; padding-top: 20px; }
          .cta { background-color: #2a6444; color: white; padding: 10px 15px; text-decoration: none; border-radius: 4px; display: inline-block; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Obrigado pelo seu pedido de análise gratuita 🚀</h2>
          
          <p>Olá ${nome},</p>
          
          <p>Recebemos o seu pedido de análise gratuita na Crescentia. Aqui estão os detalhes que nos enviou:</p>
          
          <div class="info-item">
            <span class="info-label">🏢 Empresa:</span> ${empresa || "Não informada"}
          </div>
          
          <div class="info-item">
            <span class="info-label">🗂️ Área de atividade:</span> ${area || "Não informada"}
          </div>
          
          <div class="info-item">
            <span class="info-label">✅ Interesses:</span> ${interessesText}
          </div>
          
          <p>Em breve entraremos em contacto para lhe apresentar as melhores oportunidades de financiamento e estratégia para a sua empresa.</p>
          
          <p>➡️ Se quiser adiantar algum detalhe, pode responder diretamente a este email.</p>
          
          <div class="footer">
            <p>Obrigado pela confiança,<br>A equipa Crescentia Consultoria</p>
          </div>
        </div>
      </body>
    </html>
    `;

    // Enviar o email de confirmação
    const { data, error } = await resend.emails.send({
      from: "Crescentia Consultoria <noreply@crescentia.pt>",
      to: [email],
      subject: "Obrigado pelo seu pedido de análise gratuita 🚀",
      html: emailHtml,
      reply_to: "info@crescentia.pt"
    });

    if (error) {
      console.error("Erro ao enviar email de confirmação:", error);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Erro ao enviar email de confirmação" 
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    console.log("Email de confirmação enviado com sucesso:", data);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Email de confirmação enviado com sucesso" 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Erro ao processar requisição:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: "Erro ao processar requisição" 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
