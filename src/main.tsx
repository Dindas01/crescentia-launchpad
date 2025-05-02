
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Log para depuração
console.log("Iniciando renderização da aplicação");

try {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    throw new Error("Elemento root não encontrado");
  }
  
  const root = createRoot(rootElement);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  
  console.log("Aplicação renderizada com sucesso");
} catch (error) {
  console.error("Erro ao renderizar a aplicação:", error);
}
