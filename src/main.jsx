import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import FormaCadastro from "./components/FormCadastro";
import Quantidade from "./components/Quantidade";
import FormPreferencias from "./components/Preferencias";
import FormConfiguracoes from "./components/Config";
import CadastrodeProdutos from "./components/CadastrodeProdutos";
import ExemploUseState from "./components/ExemploUseState";
import ExemploEffect from "./components/exeEffect";
import ContadorEstoque from "./components/ContadorEstoque";
import CronometroSimples from "./components/CronoSimples";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FormaCadastro />
    <Quantidade />
    <FormPreferencias />
    <FormConfiguracoes />
    <CadastrodeProdutos />
    <ExemploUseState />
    <ExemploEffect />
    <ContadorEstoque />
    <CronometroSimples />
  </StrictMode>,
);
