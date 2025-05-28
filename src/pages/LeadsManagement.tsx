import React, { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Mail, Building, Calendar, MessageSquare, Filter } from "lucide-react";
import PasswordProtection from "@/components/PasswordProtection";

interface Lead {
  id: number;
  created_at: string;
  nome: string;
  email: string;
  empresa: string | null;
  area: string | null;
  interesses: string[] | null;
  mensagem: string | null;
}

const LeadsManagement = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterArea, setFilterArea] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated
    const isAuth = sessionStorage.getItem("leads_authenticated") === "true";
    setIsAuthenticated(isAuth);
    
    if (isAuth) {
      fetchLeads();
    } else {
      setLoading(false);
    }
  }, []);

  const handleAuthenticated = () => {
    setIsAuthenticated(true);
    fetchLeads();
  };

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("Leads Website")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        throw error;
      }

      setLeads(data || []);
    } catch (error) {
      console.error("Erro ao buscar leads:", error);
      toast({
        title: "Erro ao carregar leads",
        description: "Não foi possível carregar os dados dos leads.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-PT", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getInterestLabel = (interest: string) => {
    const labels: { [key: string]: string } = {
      fundos: "Fundos e incentivos",
      estrategia: "Estratégia de negócio",
      digitalizacao: "Digitalização",
      projetos: "Gestão de projetos",
      outro: "Outro",
    };
    return labels[interest] || interest;
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch = 
      lead.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (lead.empresa && lead.empresa.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesArea = !filterArea || lead.area === filterArea;
    
    return matchesSearch && matchesArea;
  });

  const uniqueAreas = [...new Set(leads.map(lead => lead.area).filter(Boolean))];

  if (!isAuthenticated) {
    return <PasswordProtection onAuthenticated={handleAuthenticated} />;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Carregando leads...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Gestão de Leads
          </h1>
          <p className="text-gray-600">
            Gerir e acompanhar os contactos recebidos através do website
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Leads</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{leads.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Hoje</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {leads.filter(lead => 
                  new Date(lead.created_at).toDateString() === new Date().toDateString()
                ).length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Com Empresa</CardTitle>
              <Building className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {leads.filter(lead => lead.empresa).length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Filtros</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Pesquisar por nome, email ou empresa..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="w-full md:w-48">
                <select
                  value={filterArea}
                  onChange={(e) => setFilterArea(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-business-500"
                >
                  <option value="">Todas as áreas</option>
                  {uniqueAreas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setFilterArea("");
                }}
              >
                <Filter className="h-4 w-4 mr-2" />
                Limpar
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Leads Table */}
        <Card>
          <CardHeader>
            <CardTitle>Leads ({filteredLeads.length})</CardTitle>
            <CardDescription>
              Lista de todos os contactos recebidos através do formulário do website
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Empresa</TableHead>
                    <TableHead>Área</TableHead>
                    <TableHead>Interesses</TableHead>
                    <TableHead>Mensagem</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredLeads.map((lead) => (
                    <TableRow key={lead.id}>
                      <TableCell className="font-medium">
                        {formatDate(lead.created_at)}
                      </TableCell>
                      <TableCell>{lead.nome}</TableCell>
                      <TableCell>
                        <a
                          href={`mailto:${lead.email}`}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          {lead.email}
                        </a>
                      </TableCell>
                      <TableCell>{lead.empresa || "-"}</TableCell>
                      <TableCell>
                        {lead.area ? (
                          <Badge variant="secondary">{lead.area}</Badge>
                        ) : (
                          "-"
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {lead.interesses?.map((interesse) => (
                            <Badge key={interesse} variant="outline" className="text-xs">
                              {getInterestLabel(interesse)}
                            </Badge>
                          )) || "-"}
                        </div>
                      </TableCell>
                      <TableCell className="max-w-xs">
                        {lead.mensagem ? (
                          <div className="truncate" title={lead.mensagem}>
                            {lead.mensagem.length > 50
                              ? `${lead.mensagem.substring(0, 50)}...`
                              : lead.mensagem}
                          </div>
                        ) : (
                          "-"
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              {filteredLeads.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  {searchTerm || filterArea
                    ? "Nenhum lead encontrado com os filtros aplicados."
                    : "Ainda não há leads para mostrar."}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LeadsManagement;
