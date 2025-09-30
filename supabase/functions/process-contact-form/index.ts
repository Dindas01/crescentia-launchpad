
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";

const supabase = createClient(supabaseUrl, supabaseServiceKey);

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData = await req.json();
    const { nome, email, empresa, area, interesses, mensagem } = formData;

    console.log("Recebido dados do formulário:", formData);

    // Validação básica
    if (!nome || !email) {
      return new Response(
        JSON.stringify({ error: "Nome e email são obrigatórios" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Inserir dados no Supabase
    const { data: leadData, error: insertError } = await supabase
      .from("Leads Website")
      .insert([
        {
          nome,
          email,
          empresa,
          area,
          interesses,
          mensagem,
        }
      ])
      .select();

    if (insertError) {
      console.error("Erro ao inserir no Supabase:", insertError);
      return new Response(
        JSON.stringify({ error: "Erro ao salvar os dados" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    console.log("Dados inseridos com sucesso no Supabase:", leadData);

    // Enviar email de notificação para o administrador
    const interessesText = interesses && interesses.length > 0
      ? interesses.join(", ")
      : "Não especificados";

    const adminEmailHtml = `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          h2 { color: #2a6444; margin-bottom: 20px; }
          .info-item { margin-bottom: 15px; }
          .info-label { font-weight: bold; color: #2a6444; }
          .footer { margin-top: 30px; font-size: 14px; color: #555; border-top: 1px solid #eee; padding-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Nova Solicitação de Análise Gratuita 🚀</h2>
          
          <p>Uma pessoa acaba de solicitar uma análise gratuita no website Crescentia:</p>
          
          <div class="info-item">
            <span class="info-label">👤 Nome:</span> ${nome}
          </div>
          
          <div class="info-item">
            <span class="info-label">📧 Email:</span> ${email}
          </div>
          
          <div class="info-item">
            <span class="info-label">🏢 Empresa:</span> ${empresa || "Não informada"}
          </div>
          
          <div class="info-item">
            <span class="info-label">🗂️ Área de atividade:</span> ${area || "Não informada"}
          </div>
          
          <div class="info-item">
            <span class="info-label">✅ Interesses:</span> ${interessesText}
          </div>
          
          <div class="info-item">
            <span class="info-label">💬 Mensagem:</span> ${mensagem || "Nenhuma mensagem fornecida"}
          </div>
          
          <div class="footer">
            <p>Este email foi enviado automaticamente pelo sistema da Crescentia Consultoria.</p>
          </div>
        </div>
      </body>
    </html>
    `;

    try {
      const { data: adminEmailData, error: adminEmailError } = await resend.emails.send({
        from: "Crescentia Website <noreply@crescentia.pt>",
        to: ["info@crescentia.pt"],
        subject: "Nova Solicitação de Análise Gratuita - Crescentia",
        html: adminEmailHtml,
        reply_to: email
      });

      if (adminEmailError) {
        console.error("Erro ao enviar email para administrador:", adminEmailError);
      } else {
        console.log("Email de notificação enviado ao administrador com sucesso:", adminEmailData);
      }
    } catch (emailError) {
      console.error("Erro ao enviar email para administrador:", emailError);
      // Não retornamos erro aqui porque a principal funcionalidade (salvar os dados) já foi concluída
    }

    return new Response(
      JSON.stringify({ success: true, message: "Dados processados com sucesso" }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Erro ao processar requisição:", error);
    return new Response(
      JSON.stringify({ error: "Erro interno do servidor" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
