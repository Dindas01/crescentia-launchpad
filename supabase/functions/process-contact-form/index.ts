
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@1.0.0";
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
        },
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

    // CUSTOMIZE EMAIL CONFIGURATION HERE
    // You can modify the HTML template, subject line, sender address and recipient email

    // 1. Email HTML Template
    const emailHtml = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            h2 { color: #2a6444; border-bottom: 1px solid #eee; padding-bottom: 10px; }
            .info-item { margin-bottom: 15px; }
            .info-label { font-weight: bold; }
            .message-box { background-color: #f9f9f9; padding: 15px; border-left: 4px solid #2a6444; margin-top: 20px; }
            .footer { margin-top: 30px; font-size: 12px; color: #777; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>Nova mensagem de contacto recebida</h2>
            
            <div class="info-item">
              <span class="info-label">Nome:</span> ${nome}
            </div>
            
            <div class="info-item">
              <span class="info-label">Email:</span> ${email}
            </div>
            
            <div class="info-item">
              <span class="info-label">Empresa:</span> ${empresa || "Não informado"}
            </div>
            
            <div class="info-item">
              <span class="info-label">Área:</span> ${area || "Não informada"}
            </div>
            
            <div class="info-item">
              <span class="info-label">Interesses:</span> ${
                interesses && interesses.length > 0
                  ? interesses.join(", ")
                  : "Nenhum selecionado"
              }
            </div>
            
            <div class="info-item">
              <span class="info-label">Mensagem:</span>
              <div class="message-box">
                ${mensagem || "Nenhuma mensagem"}
              </div>
            </div>
            
            <div class="footer">
              Esta mensagem foi enviada através do formulário de contacto do website Crescentia.
            </div>
          </div>
        </body>
      </html>
    `;

    // 2. Email Configuration
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: "Formulário de Contacto Crescentia <noreply@crescentia.pt>", // Customize sender name and email
      to: ["geral@crecentia.pt"], // Add all recipient emails here as an array
      subject: `Nova mensagem de contacto: ${nome} - ${empresa || ""}`, // Customize subject line
      html: emailHtml,
      reply_to: email,
    });

    if (emailError) {
      console.error("Erro ao enviar email:", emailError);
      // Não retornamos erro aqui, pois a inserção no banco foi bem-sucedida
    } else {
      console.log("Email enviado com sucesso:", emailData);
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
