import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import FormaCadastro from "./components/FormCadastro";
import Quantidade from "./components/Quantidade";
import FormPreferencias from "./components/Preferencias";
import FormConfiguracoes from "./components/Config";
import CadastrodeProdutos from "./components/CadastroProduct";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FormaCadastro />
    <Quantidade />
    <FormPreferencias />
    <FormConfiguracoes />
    <CadastrodeProdutos />
  </StrictMode>,
);
