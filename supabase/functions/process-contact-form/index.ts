
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
