
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";

interface PasswordProtectionProps {
  onAuthenticated: () => void;
}

const PasswordProtection = ({ onAuthenticated }: PasswordProtectionProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Simple password - you can change this
  const ADMIN_PASSWORD = "admin123";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem("leads_authenticated", "true");
      onAuthenticated();
    } else {
      setError("Palavra-passe incorreta");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <Lock className="h-6 w-6 text-blue-600" />
          </div>
          <CardTitle>Acesso Restrito</CardTitle>
          <CardDescription>
            Introduza a palavra-passe para aceder à gestão de leads
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="password">Palavra-passe</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Introduza a palavra-passe"
                required
              />
              {error && (
                <p className="text-sm text-red-600 mt-1">{error}</p>
              )}
            </div>
            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PasswordProtection;
