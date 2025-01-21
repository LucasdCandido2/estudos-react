import React from "react";
import { useCalculator } from "./context/CalculatorContext";
import { ModeSelector } from "./components/ModeSelector";
import { CalculatorCommon } from "./components/CalculatorCommon";
import { CalculatorScientific } from "./components/CalculatorScientific";
import { CalculatorFinancial } from "./components/CalculatorFinancial";
import styles from "./styles/App.module.css";

function App() {
  const { mode } = useCalculator(); // Deve estar disponível

  return (
    <div className={styles.app}>
      <h1>Calculadora Completa</h1>
      <ModeSelector />
      {mode === "common" && <CalculatorCommon />}
      {mode === "scientific" && <CalculatorScientific />}
      {mode === "financial" && <CalculatorFinancial />}
    </div>
  );
}

export default App;
