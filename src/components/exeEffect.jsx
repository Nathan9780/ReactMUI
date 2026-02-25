import React, { useEffect } from "react";

function ExemploEffect() {
  const [status, setStatus] = React.useState("Carregando...");

  // O useEffect executa automaticamente

  React.useEffect(function () {
    // Simulando que após 5 segundos algo acontece
    setTimeout(function () {
      setStatus("Sistema Pronto!");
    }, 5000);
  }, []); // 0 [] garante que só rode uma vez

  return (
    <div>
      <h1>Status do Sistema: {status}</h1>
      <p>O vigia {useEffect} mudou o texto sozinho após 5 segundos</p>
    </div>
  );
}

export default ExemploEffect;
