import React, { createContext, useContext, useState } from "react";

// Criação do contexto
export const CalculatorContext = createContext();

// Provider para encapsular os componentes
export function CalculatorProvider({ children }) {
  const [mode, setMode] = useState("common");

  const switchMode = (newMode) => {
    setMode(newMode);
  };

  return (
    <CalculatorContext.Provider value={{ mode, switchMode }}>
      {children}
    </CalculatorContext.Provider>
  );
}

// Hook customizado para acessar o contexto
export function useCalculator() {
  const context = useContext(CalculatorContext);
  console.log("Contexto fornecido:", context); // Log do contexto
  if (!context) {
    throw new Error("useCalculator deve ser usado dentro de um CalculatorProvider");
  }
  return context;
}
